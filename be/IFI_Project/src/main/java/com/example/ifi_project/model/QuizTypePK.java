package com.example.ifi_project.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class QuizTypePK implements Serializable {
    @Column(name="id_quiz")
    private Long id_quiz;

    @Column(name="id_type")
    private Long id_type;

}
