package com.example.ifi_project.controller;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Response;
import com.example.ifi_project.model.Views;
import com.example.ifi_project.service.CategoryService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static java.lang.Integer.parseInt;

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
    public Response getAllCategory() {
        return categoryService.getAllCategory();
    }

    @JsonView(Views.Back.class)
    @GetMapping
    public Response getCategory() {
        return categoryService.getCategoryNotDelete();
    }

    @JsonView(Views.Back.class)
    @GetMapping(path="user/{userId}")
    public Response getCategoryByUserId(@PathVariable("userId") Long userId) {
        return categoryService.getCategorysByUserIdNotDelete(userId);
    }

    @GetMapping(path="top")
    @JsonView(Views.Back.class)
    public Response getCategoryTopNotDelete(@RequestParam String page, @RequestParam String amount) {
        int p = 0;
        int a = 12;
        try {
            p =  parseInt(page);
            a = parseInt(amount);
        }catch (Exception e){
        }
        return categoryService.getCategoryTopNotDelete(p,a);
    }

    @GetMapping(path="new")
    @JsonView(Views.Back.class)
    public Response getCategoryNewNotDelete(@RequestParam String page, @RequestParam String amount) {
        int p = 0;
        int a = 12;
        try {
            p =  parseInt(page);
            a = parseInt(amount);
        }catch (Exception e){
        }
        return categoryService.getCategoryNewNotDelete(p,a);
    }

    @GetMapping(path="{categoryId}")
    @JsonView(Views.Internal.class)
    public Response getCategoryById(@PathVariable("categoryId") Long categoryId) {
        return categoryService.getCategoryByIdNotDelete(categoryId);
    }

    @PostMapping(path="add")
    public Response addNewCategory(@RequestBody Category category) {
        category.setDeleted(false);
        return categoryService.addNewCategory(category);
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
