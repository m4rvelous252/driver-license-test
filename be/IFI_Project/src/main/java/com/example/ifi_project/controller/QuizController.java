package com.example.ifi_project.controller;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Test;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.QuizService;
import com.example.ifi_project.service.TypeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/quiz")
@CrossOrigin
@JsonView(Views.Public.class)
public class QuizController {
    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @JsonView(Views.Public.class)
    @GetMapping(path="all")
    public List<Quiz> getAllQuiz() {
        return quizService.getAllQuiz();
    }

    @GetMapping
    @JsonView(Views.Public.class)
    public List<Quiz> getQuiz() {
        return quizService.getQuiz();
    }

    @GetMapping(path="{quizId}")
    @JsonView(Views.Internal.class)
    public Optional<Quiz> getQuizById(@PathVariable("quizId") Long quizId) {
        return quizService.getQuizById(quizId);
    }

    @PostMapping(path="add")
    public void addNewQuiz(@RequestBody Quiz quiz) {
        quizService.addNewQuiz(quiz);
    }

    @DeleteMapping(path="{quizId}")
    public void deleteQuiz(@PathVariable("quizId") Long quizId){
        quizService.deleteQuizById(quizId);
    }

    @PutMapping(path="restore/{quizId}")
    public void restoreQuiz(@PathVariable("quizId") Long quizId){
        quizService.restoreQuizById(quizId);
    }

}