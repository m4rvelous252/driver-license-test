package com.example.ifi_project.service;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }

    public List<Category> getCategory(){
        return categoryRepository.getCategory();
    }

    public Optional<Category> getCategoryById(Long id){
        return categoryRepository.findById(id);
    }

    public void addNewCategory(Category category) {
        System.out.println(category);
        categoryRepository.save(category);
    }

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
