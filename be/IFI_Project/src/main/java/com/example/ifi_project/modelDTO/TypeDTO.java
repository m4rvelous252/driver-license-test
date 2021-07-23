package com.example.ifi_project.modelDTO;

import com.example.ifi_project.model.*;
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

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class TypeDTO {

    private Long id;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String type_name;

    Long id_category;

    @JsonIgnore
    Category category;

    @JsonView(Views.Internal.class)
    List<QuestionDTO> questions;

    @Transient
    private int sizeNotDelete;

    @Transient
    private int sizeDeleted;


    private List<QuizTypeDTO> quizType = new ArrayList<QuizTypeDTO>();

    public TypeDTO(Type type) {
    }

    public int getSizeNotDelete() {
        int size =0;
        for (QuestionDTO q:this.getQuestions()) {
            if(!q.getDeleted()){
                size++;
            }
        }
        return size;
    }

    public int getSizeDeleted() {
        int size =0;
        for (QuestionDTO q:this.getQuestions()) {
            if(q.getDeleted()){
                size++;
            }
        }
        return size;
    }
}
