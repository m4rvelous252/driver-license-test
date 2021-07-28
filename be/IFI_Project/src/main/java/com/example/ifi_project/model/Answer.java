package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;
    private String img;

    private Boolean is_correct;
    private LocalDate create_date;
    private LocalDate update_date;
    private LocalDate delete_date;

    private boolean deleted = false;

    @Column(name = "question_id", insertable = false, updatable = false)
    Long question_id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "question_id", insertable = true, updatable = true)
    Question question;


    @Override
    public String toString() {
        return "Answer{" +
                "id=" + id +
                '}';
    }


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}


	public String getImg() {
		return img;
	}


	public void setImg(String img) {
		this.img = img;
	}


	public Boolean getIs_correct() {
		return is_correct;
	}


	public void setIs_correct(Boolean is_correct) {
		this.is_correct = is_correct;
	}


	public LocalDate getCreate_date() {
		return create_date;
	}


	public void setCreate_date(LocalDate create_date) {
		this.create_date = create_date;
	}


	public LocalDate getUpdate_date() {
		return update_date;
	}


	public void setUpdate_date(LocalDate update_date) {
		this.update_date = update_date;
	}


	public LocalDate getDelete_date() {
		return delete_date;
	}


	public void setDelete_date(LocalDate delete_date) {
		this.delete_date = delete_date;
	}


	public boolean isDeleted() {
		return deleted;
	}


	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}


	public Long getQuestion_id() {
		return question_id;
	}


	public void setQuestion_id(Long question_id) {
		this.question_id = question_id;
	}


	public Question getQuestion() {
		return question;
	}


	public void setQuestion(Question question) {
		this.question = question;
	}
    
    
}
