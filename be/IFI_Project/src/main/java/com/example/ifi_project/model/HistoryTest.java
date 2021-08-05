package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="historytest")
@JsonView(Views.Public.class)
public class HistoryTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate create_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private int time;

    private int timeStart;

    private int duration;

    private Long id_user = 0L;

    private int mark;

    private long id_category;

    private int passMark;

    private boolean pass;

    @Transient
    private int max;

    public int getMax() {
        return this.questions.size();
    }

    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "history_test_id")
    @JsonView(Views.Internal.class)
    List<HistoryQuestion> questions;

    @Override
    public String toString() {
        return "HistoryTest{" +
                "id=" + id +
                ", create_date=" + create_date +
                ", delete_date=" + delete_date +
                ", deleted=" + deleted +
                ", name='" + name + '\'' +
                ", time=" + time +
                ", timeStart=" + timeStart +
                ", id_user=" + id_user +
                ", questions=" + questions +
                '}';
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getCreate_date() {
		return create_date;
	}

	public void setCreate_date(LocalDate create_date) {
		this.create_date = create_date;
	}

	public LocalDate getDelete_date() {
		return delete_date;
	}

	public void setDelete_date(LocalDate delete_date) {
		this.delete_date = delete_date;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public int getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(int timeStart) {
		this.timeStart = timeStart;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public Long getId_user() {
		return id_user;
	}

	public void setId_user(Long id_user) {
		this.id_user = id_user;
	}

	public int getMark() {
		return mark;
	}

	public void setMark(int mark) {
		this.mark = mark;
	}

	public long getId_category() {
		return id_category;
	}

	public void setId_category(long id_category) {
		this.id_category = id_category;
	}

	public List<HistoryQuestion> getQuestions() {
		return questions;
	}

	public void setQuestions(List<HistoryQuestion> questions) {
		this.questions = questions;
	}

	public void setMax(int max) {
		this.max = max;
	}

	public int getPassMark() {
		return passMark;
	}

	public void setPassMark(int passMark) {
		this.passMark = passMark;
	}

	public boolean isPass() {
		return pass;
	}

	public void setPass(boolean pass) {
		this.pass = pass;
	}
    
	
    
}
