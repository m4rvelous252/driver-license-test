package com.example.ifi_project.model;

import lombok.Data;

import java.util.List;

@Data
public class Test {
    private Quiz quiz;
    private List<Question> questions;
}
