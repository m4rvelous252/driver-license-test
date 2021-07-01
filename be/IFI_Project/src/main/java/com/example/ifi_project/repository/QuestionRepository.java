package com.example.ifi_project.repository;

import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
}
