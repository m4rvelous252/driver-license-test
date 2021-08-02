package com.example.ifi_project.modelDTO;

import com.example.ifi_project.mapper.MapperType;
import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.model.Views;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data // lombok giúp generate các hàm constructor, get, set v.v.
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonView(Views.Public.class)
public class CategoryDTO {

    private Long id;

    private LocalDate create_date;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private Long idUser;

    @JsonView(Views.Internal.class)
    List<TypeDTO> type;

    @JsonView(Views.Internal.class)
    List<QuizDTO> quiz;

    public CategoryDTO(Category category) {
        this.id = category.getId();
        this.create_date = category.getCreateDate();
        this.update_date = category.getUpdate_date();
        this.delete_date = category.getDelete_date();
        this.deleted = category.getDeleted();
        this.name = category.getName();
        this.idUser = category.getIdUser();
        this.type = MapperType.MapperListToDTO(category.getType());
        //this.quiz = MapperQuiz.MapperListToDTO(category.getQuiz());
    }
}
