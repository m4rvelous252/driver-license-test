package com.example.ifi_project.filter;

import com.example.ifi_project.model.QuizType;

import java.util.ArrayList;
import java.util.List;

public class FilterQuizType {
    public static List<QuizType> FilterListQuizTypesNotDelete(List<QuizType> quizTypes){
        List<QuizType> tempQuizTypes = new ArrayList<>();
        if(!quizTypes.isEmpty()){
            for (QuizType qt: quizTypes) {
                if(!qt.getType().getDeleted()){
                    tempQuizTypes.add(qt);
                }
            }
        }
        return tempQuizTypes;
    }
}
