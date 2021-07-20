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
}
