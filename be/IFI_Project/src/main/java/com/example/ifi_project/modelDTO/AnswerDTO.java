package com.example.ifi_project.modelDTO;

import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Views;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class AnswerDTO {

    private Long id;

    private String text;
    private String img;

    private Boolean is_correct;
    private LocalDate create_date;
    private LocalDate update_date;
    private LocalDate delete_date;

    Long question_id;

    QuestionDTO question;


}
