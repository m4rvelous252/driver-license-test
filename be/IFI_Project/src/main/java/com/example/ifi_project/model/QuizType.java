package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
@Table(name="quiz_type")
public class QuizType implements Serializable {

    @EmbeddedId
    private QuizTypePK id;

    @Column(name = "id_quiz", insertable = false, updatable = false)
    Long id_quiz;

    @JsonIgnore
    @ManyToOne
    @MapsId("id_quiz")
    @JoinColumn(name = "id_quiz", insertable = true, updatable = true)
    private Quiz quiz;

    @Column(name = "id_type", insertable = false, updatable = false)
    Long id_type;

    @ManyToOne
    @MapsId("id_type")
    @JoinColumn(name="id_type",insertable = true, updatable = true)
    private Type type;

    private int amount;

	public QuizTypePK getId() {
		return id;
	}

	public void setId(QuizTypePK id) {
		this.id = id;
	}

	public Long getId_quiz() {
		return id_quiz;
	}

	public void setId_quiz(Long id_quiz) {
		this.id_quiz = id_quiz;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public Long getId_type() {
		return id_type;
	}

	public void setId_type(Long id_type) {
		this.id_type = id_type;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

    
    
}
