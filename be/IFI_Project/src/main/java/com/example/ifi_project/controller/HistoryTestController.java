package com.example.ifi_project.controller;

import com.example.ifi_project.model.HistoryTest;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Test;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.HistoryTestService;
import com.example.ifi_project.service.QuizService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/historytest")
@CrossOrigin
@JsonView(Views.Public.class)
public class HistoryTestController {
    private final HistoryTestService historyTestService;

    @Autowired
    public HistoryTestController(HistoryTestService historyTestService) {
        this.historyTestService = historyTestService;
    }

    @GetMapping
    @JsonView(Views.Public.class)
    public List<HistoryTest> getHistoryTest() {
        return historyTestService.getHistoryTest();
    }

    @GetMapping(path="{Id}")
    @JsonView(Views.Internal.class)
    public Optional<HistoryTest> getHistoryTestById(@PathVariable("Id") Long Id) {
        return historyTestService.getHistoryTestById(Id);
    }


    @GetMapping(path="random/{quizId}")
    @JsonView(Views.Public.class)
    public Test getNewQuizById(@PathVariable("quizId") Long quizId) {
        return historyTestService.getTestByQuiz(quizId);
    }

    @GetMapping(path="random/{quizId}/{userId}")
    @JsonView(Views.Public.class)
    public Test getNewQuizByIdWithUser(@PathVariable("quizId") Long quizId,@PathVariable("quizId") Long userId) {
        Test test = historyTestService.getTestByQuiz(quizId);
        test = historyTestService.saveTestWithid(test,userId);
        return test;
    }



}
