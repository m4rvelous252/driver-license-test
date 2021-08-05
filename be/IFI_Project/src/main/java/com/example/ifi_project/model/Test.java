package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

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
        return quiz.getIdCategory();
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
}
