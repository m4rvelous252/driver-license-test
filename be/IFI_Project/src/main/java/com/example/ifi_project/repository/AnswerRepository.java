package com.example.ifi_project.repository;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
