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
@JsonView(Views.Public.class)
public class Quiz{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate create_date = LocalDate.now();

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private int time;


    @Column(name = "id_category", insertable = false, updatable = false)
    Long idCategory;

    @JoinColumn(name = "id_category", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade=CascadeType.ALL)
    Category category;

    @OneToMany(mappedBy = "quiz")
    private List<QuizType> quizType = new ArrayList<QuizType>();

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
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

	public List<QuizType> getQuizType() {
		return quizType;
	}

	public void setQuizType(List<QuizType> quizType) {
		this.quizType = quizType;
	}
    
    

}
