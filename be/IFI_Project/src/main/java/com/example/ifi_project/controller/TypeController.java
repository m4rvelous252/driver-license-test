package com.example.ifi_project.controller;

import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.TypeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/type")
@CrossOrigin
@JsonView(Views.Public.class)
public class TypeController {
    private final TypeService typeService;

    @Autowired
    public TypeController(TypeService typeService) {
        this.typeService = typeService;
    }

    @GetMapping(path="all")
    public List<Type> getAllType() {
        return typeService.getAllType();
    }

    @GetMapping
    @JsonView(Views.Public.class)
    public List<Type> getType() {
        return typeService.getType();
    }

    @GetMapping(path="{typeId}")
    @JsonView(Views.Internal.class)
    public Optional<Type> getTypeById(@PathVariable("typeId") Long typeId) {
        return typeService.getTypeById(typeId);
    }

    @PostMapping(path="add")
    public void addNewType(@RequestBody Type type) {
        typeService.addNewType(type);
    }

    @DeleteMapping(path="{typeId}")
    public void deleteType(@PathVariable("typeId") Long typeId){
        typeService.deleteTypeById(typeId);
    }

    @PutMapping(path="restore/{typeId}")
    public void restoreType(@PathVariable("typeId") Long typeId){
        typeService.restoreTypeById(typeId);
    }





}
