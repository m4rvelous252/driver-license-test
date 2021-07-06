package com.example.ifi_project.controller;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.service.AnswerService;
import com.example.ifi_project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path="add")
    public void addNewType(@RequestBody List<Answer> answers) {
        answerService.addNewAnswer(answers);
    }


}
