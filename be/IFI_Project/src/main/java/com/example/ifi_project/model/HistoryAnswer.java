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
@Table(name="historyanswer")
@JsonView(Views.Public.class)
public class HistoryAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;
    private String img;
    private Boolean is_correct;

    private Boolean is_select=false;

    @Column(name = "history_question_id", insertable = false, updatable = false)
    Long history_question_id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "history_question_id", insertable = true, updatable = true)
    HistoryQuestion question;

    @Override
    public String toString() {
        return "HistoryAnswer{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", img='" + img + '\'' +
                ", is_correct=" + is_correct +
                ", is_select=" + is_select +
                ", history_question_id=" + history_question_id +
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

	public Boolean getIs_select() {
		return is_select;
	}

	public void setIs_select(Boolean is_select) {
		this.is_select = is_select;
	}

	public Long getHistory_question_id() {
		return history_question_id;
	}

	public void setHistory_question_id(Long history_question_id) {
		this.history_question_id = history_question_id;
	}

	public HistoryQuestion getQuestion() {
		return question;
	}

	public void setQuestion(HistoryQuestion question) {
		this.question = question;
	}
    
    
}
