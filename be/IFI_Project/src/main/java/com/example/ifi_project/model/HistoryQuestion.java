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
import java.util.List;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
@Table(name="historyquestion")
public class HistoryQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String text;

    private String img;

    private Boolean dead_point;


    private Boolean is_correct;

    private boolean pick_one = false;

    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "history_question_id")
    @JsonIgnoreProperties("historyQuestion")
    List<HistoryAnswer> answers;

    @Column(name = "history_test_id", insertable = false, updatable = false)
    Long history_test_id;

    @JoinColumn(name = "history_test_id", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    HistoryTest test;

    @Override
    public String toString() {
        return "HistoryQuestion{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", img='" + img + '\'' +
                ", dead_point=" + dead_point +
                ", answers=" + answers +
                ", history_test_id=" + history_test_id +
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

	public Boolean getDead_point() {
		return dead_point;
	}

	public void setDead_point(Boolean dead_point) {
		this.dead_point = dead_point;
	}

	public Boolean getIs_correct() {
		return is_correct;
	}

	public void setIs_correct(Boolean is_correct) {
		this.is_correct = is_correct;
	}

	public boolean isPick_one() {
		return pick_one;
	}

	public void setPick_one(boolean pick_one) {
		this.pick_one = pick_one;
	}

	public List<HistoryAnswer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<HistoryAnswer> answers) {
		this.answers = answers;
	}

	public Long getHistory_test_id() {
		return history_test_id;
	}

	public void setHistory_test_id(Long history_test_id) {
		this.history_test_id = history_test_id;
	}

	public HistoryTest getTest() {
		return test;
	}

	public void setTest(HistoryTest test) {
		this.test = test;
	}
    
    
}
