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

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "history_question_id")
    @JsonIgnoreProperties("historyQuestion")
    List<HistoryAnswer> historyAnswers;

    @Column(name = "history_test_id", insertable = false, updatable = false)
    Long history_test_id;

    @JoinColumn(name = "history_test_id", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    HistoryTest historyTest;




}
