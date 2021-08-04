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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "create_date")
    private LocalDate createDate;

    private LocalDate update_date;

    private LocalDate delete_date;

    private Boolean deleted = false;

    private String name;

    private String img;

    private int  submit = 0;

    @Column(name = "id_user", insertable = false, updatable = false)
    private Long idUser;

    @JoinColumn(name = "id_user", insertable = true, updatable = true)
    @JsonView(Views.Back.class)
    @ManyToOne(fetch = FetchType.EAGER)
    User user;

    @JsonView(Views.Internal.class)
    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "id_category")
    @JsonIgnoreProperties("category")
    List<Type> type;

    @JsonView(Views.Internal.class)
    @OneToMany(fetch = FetchType.LAZY,cascade=CascadeType.ALL)
    @JoinColumn(name = "id_category")
    @JsonIgnoreProperties("category")
    List<Quiz> quiz;
}
