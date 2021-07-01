package com.example.ifi_project.service;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
    private final TypeRepository typeRepository;

    @Autowired
    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }
    public List<Type> getType(){
        return typeRepository.findAll();
    }
}
