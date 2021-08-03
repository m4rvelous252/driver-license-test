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

	public Long getId_quiz() {
		return id_quiz;
	}

	public void setId_quiz(Long id_quiz) {
		this.id_quiz = id_quiz;
	}

	public Long getId_type() {
		return id_type;
	}

	public void setId_type(Long id_type) {
		this.id_type = id_type;
	}

    
    
}

