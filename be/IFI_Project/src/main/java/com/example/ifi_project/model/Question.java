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
    @ManyToOne(fetch = FetchType.EAGER)
    Type type;

    @OneToMany(fetch = FetchType.LAZY)
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
}
