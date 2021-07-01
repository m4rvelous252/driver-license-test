package com.example.ifi_project.controller;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.service.AnswerService;
import com.example.ifi_project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/answer")
@CrossOrigin
public class AnswerController {
    private final AnswerService answerService;

    @Autowired
    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    public List<Answer> getAnswer() {
        return answerService.getAnswer();
    }


}
