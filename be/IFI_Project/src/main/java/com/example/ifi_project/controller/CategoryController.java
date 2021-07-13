package com.example.ifi_project.controller;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.CategoryService;
import com.example.ifi_project.service.TypeService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/category")
@CrossOrigin
@JsonView(Views.Public.class)
public class CategoryController {
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @JsonView(Views.Public.class)
    @GetMapping(path="all")
    public List<Category> getAllCategory() {
        return categoryService.getAllCategory();
    }

    @JsonView(Views.Public.class)
    @GetMapping
    public List<Category> getCategory() {
        return categoryService.getCategory();
    }

    @GetMapping(path="{categoryId}")
    @JsonView(Views.Internal.class)
    public Optional<Category> getCategoryById(@PathVariable("categoryId") Long categoryId) {
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping(path="add")
    public void addNewCategory(@RequestBody Category category) {
        category.setDeleted(false);
        categoryService.addNewCategory(category);
    }

    @DeleteMapping(path="{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") Long categoryId){
        categoryService.deleteCategoryById(categoryId);
    }

    @PutMapping(path="restore/{categoryId}")
    public void restoreCategory(@PathVariable("categoryId") Long categoryId){
        categoryService.restoreCategoryById(categoryId);
    }





}
