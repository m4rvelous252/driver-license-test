package com.example.ifi_project.repository;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    @Query("SELECT q FROM Quiz q WHERE q.deleted = false")
    List<Quiz> getQuiz();

}
