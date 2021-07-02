package com.example.ifi_project.repository;

import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface TypeRepository extends JpaRepository<Type, Long> {

    @Query("SELECT t FROM Type t WHERE t.deleted = false")
    List<Type> getType();

}
