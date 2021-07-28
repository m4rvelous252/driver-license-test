package com.example.ifi_project.filter;

import com.example.ifi_project.model.Type;

import java.util.ArrayList;
import java.util.List;

public class FilterType {
    //Filter Type
    public static Type FilterTypeNotDelete(Type type) {
        if (!type.getQuestions().isEmpty()) {
            type.setQuestions(FilterQuestion.FilterListQuestionsNotDelete(type.getQuestions()));
        }
        return type;
    }

    public static List<Type> FilterListTypesNotDelete(List<Type> types) {
        List<Type> tempTypes = new ArrayList<>();
        for (Type t : types) {
            if (!t.getDeleted()) {
                t = FilterTypeNotDelete(t);
                tempTypes.add(t);
            }
        }
        return tempTypes;
    }
}
