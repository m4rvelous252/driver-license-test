package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity // Đánh dấu đây là table trong db
@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
@Table(name="quiz_type")
public class QuizType implements Serializable {

    @EmbeddedId
    private QuizTypePK id;

    @Column(name = "id_quiz", insertable = false, updatable = false)
    Long id_quiz;

    @JsonIgnore
    @ManyToOne
    @MapsId("id_quiz")
    @JoinColumn(name = "id_quiz", insertable = true, updatable = true)
    private Quiz quiz;

    @Column(name = "id_type", insertable = false, updatable = false)
    Long id_type;

    @ManyToOne
    @MapsId("id_type")
    @JoinColumn(name="id_type",insertable = true, updatable = true)
    private Type type;

    private int amount;

}
