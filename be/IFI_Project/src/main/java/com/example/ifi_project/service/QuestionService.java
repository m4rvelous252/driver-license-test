package com.example.ifi_project.service;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    public List<Question> getQuestion(){
        return questionRepository.findAll();
    }
}
