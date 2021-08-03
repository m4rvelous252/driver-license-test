package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import javax.persistence.Transient;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@JsonView(Views.Public.class)
public class Test {
    private LocalDate create_date = LocalDate.now();
    private int timeStart = LocalTime.now().getHour()*3600 +LocalTime.now().getMinute()*60+LocalTime.now().getSecond();
    private long id_category;
    private Quiz quiz;

    public long getId_category() {
        return quiz.getId_category();
    }

    private List<Question> questions;

    @Override
    public String toString() {
        return "Test{" +
                "create_date=" + create_date +
                ", timeStart=" + timeStart +
                ", quiz=" + quiz +
                ", questions=" + questions +
                '}';
    }

	public LocalDate getCreate_date() {
		return create_date;
	}

	public void setCreate_date(LocalDate create_date) {
		this.create_date = create_date;
	}

	public int getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(int timeStart) {
		this.timeStart = timeStart;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public void setId_category(long id_category) {
		this.id_category = id_category;
	}
    
    
}
