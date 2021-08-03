package com.example.ifi_project.controller;

import com.example.ifi_project.model.Response;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.TypeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @JsonView(Views.Public.class)
    @GetMapping(path="all")
    public Response getAllType() {
        return typeService.getAllType();
    }

    @GetMapping
    @JsonView(Views.Public.class)
    public Response getType() {
        return typeService.getTypeNotDelete();
    }

    @GetMapping(path="{typeId}")
    @JsonView(Views.Internal.class)
    public Response getTypeById(@PathVariable("typeId") Long typeId) {
        return typeService.getTypeByIdNotDelete(typeId);
    }

    @PostMapping(path="add")
    public Response addNewType(@RequestBody Type type) {
        return typeService.addNewType(type);
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
