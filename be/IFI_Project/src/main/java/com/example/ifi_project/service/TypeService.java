package com.example.ifi_project.service;

import com.example.ifi_project.filter.FilterType;
import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.CategoryRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TypeService {
    private final TypeRepository typeRepository;
    private final CategoryRepository categoryRepository;
    private QuestionService questionService;

    @Autowired
    public TypeService(TypeRepository typeRepository, CategoryRepository categoryRepository) {
        this.typeRepository = typeRepository;
        this.categoryRepository = categoryRepository;
    }

    public Response getAllType(){
        Response respon = new Response();
        if(typeRepository.findAll().size()==0){
            respon.data = typeRepository.findAll();
            respon = ConstantResponse.responseEmpty(respon);
        }else {
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = typeRepository.findAll();
        }
        return respon;
    }

    public Response getTypeNotDelete(){
        Response respon = new Response();
        Optional<List<Type>> optionalTypes = typeRepository.findTypeByDeletedIsFalse();
        if(!optionalTypes.isPresent()){
            respon = ConstantResponse.responseEmpty(respon);
        }else {
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = FilterType.FilterListTypesNotDelete(optionalTypes.get());
        }
        return respon;
    }

    public Response getTypeByIdNotDelete(Long id){
        Response respon = new Response();
        Optional<Type> typeOptional = typeRepository.findTypeByIdAndDeletedIsFalse(id);
        if(!typeOptional.isPresent()){
            respon = ConstantResponse.responseNotFount(respon);
        }else {
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = FilterType.FilterTypeNotDelete(typeOptional.get());
        }
        return respon;
    }

    public Response addNewType(Type type) {
        type.setDeleted(false);
        Response respon = new Response();
        System.out.println(type.getId_category());
        Optional<Category> categoryOptional = categoryRepository.findById(type.getId_category());
        if(categoryOptional.isPresent()){
            LocalDate localDate = LocalDate.now();
            type.setCreate_date(localDate);
            type.setCategory(categoryOptional.get());
            for (Question q: type.getQuestions()) {
                q.setType(type);
                for (Answer a: q.getAnswers()) {
                    a.setQuestion(q);
                }
            }
            typeRepository.save(type);
            respon = ConstantResponse.responseSaveSuc(respon);
            respon.data = type;
        }else {

            respon = ConstantResponse.responseSaveFail(respon);
        }
        return respon;
    }


    //Not use
    public void deleteTypeById(Long id){
        LocalDate localDate = LocalDate.now();
        Type type = typeRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        type.setDeleted(true);
        type.setDelete_date(localDate);
        typeRepository.save(type);
    }

    public void restoreTypeById(Long id){
        Type type = typeRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        type.setDeleted(false);
        type.setDelete_date(null);
        typeRepository.save(type);
    }

}
