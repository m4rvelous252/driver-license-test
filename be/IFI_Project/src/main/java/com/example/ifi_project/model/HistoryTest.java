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

    private int id_user;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "history_test_id")
    @JsonIgnoreProperties("historyTest")
    List<HistoryQuestion> historyQuestions;
}
