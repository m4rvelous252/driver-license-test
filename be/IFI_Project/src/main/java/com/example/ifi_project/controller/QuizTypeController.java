package com.example.ifi_project.controller;

import com.example.ifi_project.model.*;
import com.example.ifi_project.service.CategoryService;
import com.example.ifi_project.service.QuizTypeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/quiztype")
@CrossOrigin

public class QuizTypeController {
    private final QuizTypeService quizTypeService;

    @Autowired
    public QuizTypeController(QuizTypeService quizTypeService) {
        this.quizTypeService = quizTypeService;
    }

    @JsonView(Views.Public.class)
    @GetMapping
    public Response getQuizType() {
        return quizTypeService.getAllQuizType();
    }

    @PostMapping(path="add")
    public Response addQuizType(@RequestBody QuizType quizType) {
        return quizTypeService.add(quizType);
    }

    @DeleteMapping()
    public void deleteQuizType(@RequestBody QuizType quizType) {
        quizTypeService.delete(quizType);
    }

}
