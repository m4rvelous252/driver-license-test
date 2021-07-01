package com.example.ifi_project.controller;

import com.example.ifi_project.model.Type;
import com.example.ifi_project.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/type")
@CrossOrigin
public class TypeController {
    private final TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @GetMapping
    public List<Type> getType() {
        return typeService.getType();
    }


}
