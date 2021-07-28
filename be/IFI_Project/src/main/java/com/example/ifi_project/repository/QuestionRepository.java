package com.example.ifi_project.repository;

import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query("SELECT q FROM Question q WHERE q.deleted = false")
    List<Question> getQuestion();

    Optional<List<Question>> findAllByDeletedIsFalse();

    Optional<Question> findQuestionByIdAndDeletedIsFalse(Long id);
}
