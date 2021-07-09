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
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private int time;

    @Column(name = "id_category", insertable = false, updatable = false)
    Long id_category;

    @JoinColumn(name = "id_category", insertable = true, updatable = true)
    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    Category category;

    @OneToMany(mappedBy = "type")
    private List<QuizType> quizType = new ArrayList<QuizType>();
}
