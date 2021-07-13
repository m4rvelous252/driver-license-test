package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.util.List;

@Data
@JsonView(Views.Public.class)
public class Test {
    private Long id;
    private Quiz quiz;
    private List<Question> questions;
}
