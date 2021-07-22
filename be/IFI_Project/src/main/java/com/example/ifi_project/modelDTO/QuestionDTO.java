package com.example.ifi_project.modelDTO;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class QuestionDTO {

    private Long id;

    private String text;

    private String img;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private int dead_point;

    private boolean pick_one = false;

    private  Boolean deleted = false;

    Long type_id;

    @JsonIgnore
    TypeDTO type;

    @JsonIgnoreProperties("question")
    List<AnswerDTO> answers;

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", answers=" + answers +
                '}';
    }
}
