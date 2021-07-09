package com.example.ifi_project.repository;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.QuizType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizTypeRepository extends JpaRepository<QuizType, Long> {

}
