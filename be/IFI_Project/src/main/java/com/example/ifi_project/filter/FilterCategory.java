package com.example.ifi_project.filter;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.service.QuestionService;

import java.util.ArrayList;
import java.util.List;

public class FilterCategory {

    //Filter Category
    public static Category FilterCategoryNotDelete(Category category) {
        if (!category.getQuiz().isEmpty()) {
            category.setQuiz(FilterQuiz.FilterListQuizzesNotDelete(category.getQuiz()));
        }
        if (!category.getType().isEmpty()) {
            category.setType(FilterType.FilterListTypesNotDelete(category.getType()));
        }
        return category;
    }

    public static List<Category> FilterListCategoriesNotDelete(List<Category> categories) {
        List<Category> tempCategories = new ArrayList<>();
        if(!categories.isEmpty()){
            for (Category c : categories) {
                if(!c.getDeleted()){
                    c = FilterCategoryNotDelete(c);
                    tempCategories.add(c);
                }
            }
        }
        return tempCategories;
    }

}

