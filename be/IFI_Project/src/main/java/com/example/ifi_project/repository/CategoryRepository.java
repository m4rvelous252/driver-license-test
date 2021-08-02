package com.example.ifi_project.repository;

import com.example.ifi_project.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<List<Category>> findAllByDeletedIsFalse();

    Optional<List<Category>> findCategoryByIdUserAndDeletedIsFalse(Long id);

    Optional<Category> findCategoryByIdAndDeletedIsFalse(Long id);

    Optional<List<Category>> findCategoryByDeletedIsFalseOrderBySubmitDesc(Pageable pageable);

    Optional<List<Category>> findCategoryByDeletedIsFalseOrderByCreateDateDesc(Pageable pageable);
}
