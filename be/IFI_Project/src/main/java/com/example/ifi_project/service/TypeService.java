package com.example.ifi_project.service;

import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TypeService {
    private final TypeRepository typeRepository;

    @Autowired
    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
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
        System.out.println(type);
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
