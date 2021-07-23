package com.example.ifi_project.repository;

import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface TypeRepository extends JpaRepository<Type, Long> {

    Optional<List<Type>> findTypeByDeletedIsFalse();

    Optional<Type> findTypeByIdAndDeletedIsFalse(Long id);

}
