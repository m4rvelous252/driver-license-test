package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    private String img;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private int dead_point;

    private boolean pick_one = false;

    private  Boolean deleted = false;

    @Column(name = "type_id", insertable = false, updatable = false)
    Long type_id;

    @JoinColumn(name = "type_id", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    Type type;

    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "question_id")
    @JsonIgnoreProperties("question")
    List<Answer> answers;

    @Override
    public String toString() {
        return "Question{" +
                "id=" + id +
                ", answers=" + answers +
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

	public int getDead_point() {
		return dead_point;
	}

	public void setDead_point(int dead_point) {
		this.dead_point = dead_point;
	}

	public boolean isPick_one() {
		return pick_one;
	}

	public void setPick_one(boolean pick_one) {
		this.pick_one = pick_one;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public Long getType_id() {
		return type_id;
	}

	public void setType_id(Long type_id) {
		this.type_id = type_id;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}
    
    
}

