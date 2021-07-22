package com.example.ifi_project.filter;

import com.example.ifi_project.model.Quiz;

import java.util.ArrayList;
import java.util.List;

public class FilterQuiz {
    //Filter Quiz
    public static Quiz FilterQuizNotDelete(Quiz quiz){
        if(!quiz.getQuizType().isEmpty()){
            quiz.setQuizType(FilterQuizType.FilterListQuizTypesNotDelete(quiz.getQuizType()));
        }
        return quiz;
    }

    public static List<Quiz> FilterListQuizzesNotDelete(List<Quiz> quizzes){
        List<Quiz> tempQuizzes = new ArrayList<>();
        if(!quizzes.isEmpty()){
            for (Quiz q:quizzes) {
                if(!q.getDeleted()){
                    q = FilterQuizNotDelete(q);
                    tempQuizzes.add(q);
                }
            }
        }
        return tempQuizzes;
    }
}
