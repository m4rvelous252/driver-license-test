package com.example.ifi_project.service;

import com.example.ifi_project.filter.FilterCategory;
import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.ConstantResponse;
import com.example.ifi_project.model.Response;
import com.example.ifi_project.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    private QuizService quizService;
    private TypeService typeService;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public Response getAllCategory(){
        Response respon = new Response();
        if(categoryRepository.findAll().size()==0){
            respon.data= categoryRepository.findAll();
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data= categoryRepository.findAll();
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getCategoryNotDelete(){
        Response respon = new Response();
        Optional<List<Category>> categories = categoryRepository.findAllByDeletedIsFalse();
        if(!categories.isPresent()){
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data = FilterCategory.FilterListCategoriesNotDelete(categories.get());
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getCategorysByUserIdNotDelete(Long idUser) {
        Response respon = new Response();
        Optional<List<Category>> categories = categoryRepository.findCategoryByIdUserAndDeletedIsFalse(idUser);
        if (!categories.isPresent()) {
            respon = ConstantResponse.responseEmpty(respon);
        } else {
            respon.data = FilterCategory.FilterListCategoriesNotDelete(categories.get());
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getCategoryByIdNotDelete(Long id){
        Response respon = new Response();
        Optional<Category> category = categoryRepository.findCategoryByIdAndDeletedIsFalse(id);
        if(!category.isPresent()){
            respon = ConstantResponse.responseNotFount(respon);
        }else{
            respon.data= FilterCategory.FilterCategoryNotDelete(category.get());
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response addNewCategory(Category category) {
        Response respon = new Response();
        respon = ConstantResponse.responseSaveSuc(respon);
        categoryRepository.save(category);
        return respon;
    }

    //Not use
    public void deleteCategoryById(Long id){
        LocalDate localDate = LocalDate.now();
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        category.setDeleted(true);
        category.setDelete_date(localDate);
        categoryRepository.save(category);
    }

    public void restoreCategoryById(Long id){
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        category.setDeleted(false);
        category.setDelete_date(null);
        categoryRepository.save(category);
    }

}
