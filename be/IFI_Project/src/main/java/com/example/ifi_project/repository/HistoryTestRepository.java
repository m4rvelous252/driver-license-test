package com.example.ifi_project.repository;

import com.example.ifi_project.model.HistoryTest;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoryTestRepository extends JpaRepository<HistoryTest, Long> {


}
