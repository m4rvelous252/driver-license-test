package com.example.ifi_project.filter;

import com.example.ifi_project.model.Question;

import java.util.ArrayList;
import java.util.List;

public class FilterQuestion {
    public static Question FilterQuestionNotDelete(Question question){
        if(!question.getAnswers().isEmpty()){
            question.setAnswers(FilterAnswer.FilterAnswersNotDelete(question.getAnswers()));
        }
        return question;
    }

    public static List<Question> FilterListQuestionsNotDelete(List<Question> questions){
        List<Question> tempQuestions = new ArrayList<>();
        for (Question q: questions) {
            if(q.getDeleted()){
                q = FilterQuestionNotDelete(q);
                tempQuestions.add(q);
            }
        }
        return questions;
    }
}
