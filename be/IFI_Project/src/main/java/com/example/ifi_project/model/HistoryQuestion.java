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
}
