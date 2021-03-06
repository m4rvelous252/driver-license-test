package com.example.ifi_project.controller;


import com.example.ifi_project.model.HistoryTest;
import com.example.ifi_project.model.Response;
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
    public Response getHistoryTest() {
        return historyTestService.getHistoryTest();
    }

    @GetMapping(path="{Id}")
    @JsonView(Views.Internal.class)
    public Response getHistoryTestById(@PathVariable("Id") Long Id) {
        return historyTestService.getHistoryTestById(Id);
    }


    @PostMapping(path="submitTest")
    public Response submitTest(@RequestBody HistoryTest historyTest) {
        return this.historyTestService.addNewTest(historyTest);
    }

    @GetMapping(path="/user/{IdUser}")
    @JsonView(Views.Public.class)
    public Response getHistoryTestByIdUser(@PathVariable("IdUser") Long IdUser) {
        return historyTestService.getHistoryTestByIdUser(IdUser);
    }


}
