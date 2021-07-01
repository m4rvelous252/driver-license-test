package com.example.ifi_project.service;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.repository.AnswerRepository;
import org.hibernate.query.criteria.internal.AbstractNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    @Autowired
    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }
    public List<Answer> getAnswer(){
        return answerRepository.findAll();
    }
}
