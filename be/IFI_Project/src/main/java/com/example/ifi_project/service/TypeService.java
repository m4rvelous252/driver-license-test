package com.example.ifi_project.service;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.ConstantResponse;
import com.example.ifi_project.model.Response;
import com.example.ifi_project.model.Type;
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

    public Response getType(){
        Response respon = new Response();
        if(typeRepository.getType().size()==0){
            respon.data = typeRepository.getType();
            respon = ConstantResponse.responseEmpty(respon);
        }else {
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = typeRepository.getType();
        }
        return respon;
    }

    public Response getTypeById(Long id){
        Response respon = new Response();
        if(!typeRepository.findById(id).isPresent()){
            respon = ConstantResponse.responseNotFount(respon);
        }else {
            Type type = typeRepository.findById(id).get();
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = type;
        }
        return respon;
    }

    public Response addNewType(Type type) {
        type.setDeleted(false);
        type.setId(null);
        Response respon = new Response();
        if(categoryRepository.findById(type.getId_category()).isPresent()){
            respon = ConstantResponse.responseSaveFail(respon);
        }else {
            Category category = categoryRepository.findById(type.getId_category()).get();
            LocalDate localDate = LocalDate.now();
            type.setCreate_date(localDate);
            type.setCategory(category);
            typeRepository.save(type);
            respon = ConstantResponse.responseSaveSuc(respon);
            respon.data = type;
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
