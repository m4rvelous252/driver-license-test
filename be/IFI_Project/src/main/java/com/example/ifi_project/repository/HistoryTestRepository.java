package com.example.ifi_project.repository;

import com.example.ifi_project.model.HistoryTest;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Test;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HistoryTestRepository extends JpaRepository<HistoryTest, Long> {
    @Query("SELECT h FROM HistoryTest h WHERE h.id_user = :idUser")
    List<HistoryTest> findByIdUser(@Param("idUser") Long idUser, Sort create_date);


}
