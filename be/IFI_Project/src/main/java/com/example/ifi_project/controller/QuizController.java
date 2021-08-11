package com.example.ifi_project.controller;

import com.example.ifi_project.model.*;
import com.example.ifi_project.service.QuizService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static java.lang.Integer.parseInt;

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
    public Response getAllQuiz() {
        return quizService.getAllQuiz();
    }

    @GetMapping
    @JsonView(Views.Public.class)
    public Response getQuiz() {
        return quizService.getQuizNotDelete();
    }

    @GetMapping(path="{quizId}")
    @JsonView(Views.Internal.class)
    public Response getQuizById(@PathVariable("quizId") Long quizId) {
        return quizService.getQuizByIdNotDelete(quizId);
    }

    @GetMapping(path="category/{categoryId}/deleted")
    @JsonView(Views.Internal.class)
    public Response getQuizDeletedByCategoryId(@PathVariable("categoryId") Long categoryId) {
        return quizService.getQuizDeletedByCategoryId(categoryId);
    }

    @GetMapping(path="category/{categoryId}/notdeleted")
    @JsonView(Views.Internal.class)
    public Response getQuizNotDeletedByCategoryId(@PathVariable("categoryId") Long categoryId) {
        return quizService.getQuizNotDeletedByCategoryId(categoryId);
    }

    @GetMapping(path="top")
    @JsonView(Views.Back.class)
    public Response getQuizTopNotDelete(@RequestParam String page, @RequestParam String amount) {
        int p = 0;
        int a = 12;
        try {
            p =  parseInt(page);
            a = parseInt(amount);
        }catch (Exception e){
        }
        return quizService.getQuizTopNotDelete(p,a);
    }

    @GetMapping(path="new")
    @JsonView(Views.Back.class)
    public Response getQuizNewNotDelete(@RequestParam String page, @RequestParam String amount) {
        int p = 0;
        int a = 12;
        try {
            p =  parseInt(page);
            a = parseInt(amount);
        }catch (Exception e){
        }
        return quizService.getQuizNewNotDelete(p,a);
    }

    @PostMapping(path="add")
    public Response addNewQuiz(@RequestBody Quiz quiz) {

        return quizService.addNewQuiz(quiz);
    }

    @DeleteMapping(path="{quizId}")
    public void deleteQuiz(@PathVariable("quizId") Long quizId){
        quizService.deleteQuizById(quizId);
    }

    @PutMapping(path="restore/{quizId}")
    public void restoreQuiz(@PathVariable("quizId") Long quizId){
        quizService.restoreQuizById(quizId);
    }


    @JsonView(Views.Public.class)
    @GetMapping(path="random/{quizId}")
    public Response getNewQuizById(@PathVariable("quizId") Long quizId) {
        return quizService.getTestByQuiz(quizId);
    }

}
