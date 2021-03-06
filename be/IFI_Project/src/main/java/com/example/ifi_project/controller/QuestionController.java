package com.example.ifi_project.controller;

import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Response;
import com.example.ifi_project.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/question")
@CrossOrigin
public class QuestionController {
    private final QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping(path="all")
    public Response getAllQuestion() {
        return questionService.getAllQuestion();
    }

    @GetMapping
    public Response getQuestion() {
        return questionService.getQuestionNotDeleted();
    }

    @GetMapping(path="{questionId}")
    public Response getTypeById(@PathVariable("questionId") Long questionId) {
        return questionService.getQuestionByIdNotDeleted(questionId);
    }

    @PostMapping(path="add")
    public Response addNewType(@RequestBody Question question) {
        return questionService.addNewQuestion(question);
    }

    @DeleteMapping(path="{questionId}")
    public void deleteType(@PathVariable("questionId") Long questionId){
        questionService.deleteQuestionById(questionId);
    }

    @PutMapping(path="restore/{questionId}")
    public void restoreType(@PathVariable("questionId") Long questionId){
        questionService.restoreQuestionById(questionId);
    }


}
