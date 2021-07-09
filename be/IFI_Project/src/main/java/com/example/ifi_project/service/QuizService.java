package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    private Random random = new Random();

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuiz(){
        return quizRepository.findAll();
    }

    public List<Quiz> getQuiz(){
        return quizRepository.getQuiz();
    }

    public Optional<Quiz> getQuizById(Long id){
        return quizRepository.findById(id);
    }

    public void addNewQuiz(Quiz quiz) {
        quiz.setDeleted(false);
        LocalDate localDate = LocalDate.now();
        quiz.setCreate_date(localDate);
        System.out.println(quiz);
        quizRepository.save(quiz);
    }

    public void deleteQuizById(Long id){
        LocalDate localDate = LocalDate.now();
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        quiz.setDeleted(true);
        quiz.setDelete_date(localDate);
        quizRepository.save(quiz);
    }

    public void restoreQuizById(Long id){
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        quiz.setDeleted(false);
        quiz.setDelete_date(null);
        quizRepository.save(quiz);
    }

}
