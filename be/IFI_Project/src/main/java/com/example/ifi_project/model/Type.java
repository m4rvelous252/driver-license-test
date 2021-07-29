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
import java.util.Date;
import java.util.List;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String type_name;

    @Column(name = "id_category", insertable = false, updatable = false)
    Long id_category;

    @JoinColumn(name = "id_category", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    Category category;

    @JsonView(Views.Internal.class)
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_id")
    @JsonIgnoreProperties("type")
    List<Question> questions;

    @Transient
    private int sizeNotDelete;

    @Transient
    private int sizeDeleted;

    @JsonIgnore
    @OneToMany(mappedBy = "type")
    private List<QuizType> quizType = new ArrayList<QuizType>();

    public int getSizeNotDelete() {
        int size =0;
        for (Question q:this.getQuestions()) {
            if(!q.getDeleted()){
                size++;
            }
        }
        return size;
    }

    public int getSizeDeleted() {
        int size =0;
        for (Question q:this.getQuestions()) {
            if(q.getDeleted()){
                size++;
            }
        }
        return size;
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

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public String getType_name() {
		return type_name;
	}

	public void setType_name(String type_name) {
		this.type_name = type_name;
	}

	public Long getId_category() {
		return id_category;
	}

	public void setId_category(Long id_category) {
		this.id_category = id_category;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public List<QuizType> getQuizType() {
		return quizType;
	}

	public void setQuizType(List<QuizType> quizType) {
		this.quizType = quizType;
	}

	public void setSizeNotDelete(int sizeNotDelete) {
		this.sizeNotDelete = sizeNotDelete;
	}

	public void setSizeDeleted(int sizeDeleted) {
		this.sizeDeleted = sizeDeleted;
	}
    
    
}
