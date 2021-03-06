package com.example.ifi_project.repository;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {

    Optional<List<Quiz>> findAllByDeletedIsFalse();

    Optional<Quiz> findByIdAndDeletedIsFalse(Long id);

    Optional<List<Quiz>> findQuizByIdCategoryAndDeletedIsTrue(Long id);

    Optional<List<Quiz>> findQuizByIdCategoryAndDeletedIsFalse(Long id);

    Optional<List<Quiz>> findQuizByDeletedIsFalseOrderBySubmitDesc(Pageable pageable);

    Optional<List<Quiz>> findQuizByDeletedIsFalseOrderByCreateDateDesc(Pageable pageable);

}
