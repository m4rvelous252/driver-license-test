package com.example.ifi_project.mapper;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.modelDTO.CategoryDTO;
import com.example.ifi_project.modelDTO.TypeDTO;

import java.util.ArrayList;
import java.util.List;

public class MapperType {
    public static TypeDTO MapperToDTO(Type type){
        TypeDTO typeDTO = new TypeDTO(type);
        return typeDTO;
    }

    public static List<TypeDTO> MapperListToDTO(List<Type> types){
        List<TypeDTO> typeDTOS = new ArrayList<>();
        for (Type t: types) {
            typeDTOS.add(MapperToDTO(t));
        }
        return typeDTOS;
    }

}
