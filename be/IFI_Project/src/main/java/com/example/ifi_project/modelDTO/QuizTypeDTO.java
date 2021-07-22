package com.example.ifi_project.modelDTO;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.QuizTypePK;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
@Table(name="quiz_type")
public class QuizTypeDTO implements Serializable {

    Long id_quiz;

    private QuizDTO quiz;

    Long id_type;

    private TypeDTO type;

    private int amount;

}
