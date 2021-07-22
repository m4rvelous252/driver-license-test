package com.example.ifi_project.mapper;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.modelDTO.CategoryDTO;

public class MapperCategory {
    public static CategoryDTO MapperToDTO(Category category){
        CategoryDTO categoryDTO = new CategoryDTO(category);
        return categoryDTO;
    }
}
