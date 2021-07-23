package com.example.ifi_project.modelDTO;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.QuizType;
import com.example.ifi_project.model.Views;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class QuizDTO {

    private Long id;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private int time;

    Long id_category;

    @JsonIgnore
    public CategoryDTO category;

    private List<QuizTypeDTO> quizType = new ArrayList<QuizTypeDTO>();

    public QuizDTO(Quiz quiz) {
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                '}';
    }
}
