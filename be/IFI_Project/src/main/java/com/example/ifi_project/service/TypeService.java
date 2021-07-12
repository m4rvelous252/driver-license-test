package com.example.ifi_project.service;

import com.example.ifi_project.model.Category;
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

    public List<Type> getAllType(){
        return typeRepository.findAll();
    }

    public List<Type> getType(){
        return typeRepository.getType();
    }

    public Optional<Type> getTypeById(Long id){
        return typeRepository.findById(id);
    }

    public void addNewType(Type type) {
        type.setDeleted(false);
        Category category = categoryRepository.findById(type.getId_category())
                .orElseThrow(() -> new IllegalStateException(" id does not exisits"));
        LocalDate localDate = LocalDate.now();
        type.setCreate_date(localDate);
        type.setCategory(category);
        typeRepository.save(type);
    }

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
