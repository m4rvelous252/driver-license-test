package com.example.ifi_project.repository;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface QuizRepository extends JpaRepository<Quiz, Long> {

    Optional<List<Quiz>> findAllByDeletedIsFalse();

    Optional<Quiz> findByIdAndDeletedIsFalse(Long id);

}
