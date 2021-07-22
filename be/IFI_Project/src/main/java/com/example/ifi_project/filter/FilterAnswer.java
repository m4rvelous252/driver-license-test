package com.example.ifi_project.filter;

import com.example.ifi_project.model.Answer;

import java.util.ArrayList;
import java.util.List;

public class FilterAnswer {
    public static List<Answer> FilterAnswersNotDelete(List<Answer> answers){
        List<Answer> tepmAnswers = new ArrayList<>();
        for (Answer a : answers){
            if(!a.isDeleted()){
                tepmAnswers.add(a);
            }
        }
        return tepmAnswers;
    }
}
