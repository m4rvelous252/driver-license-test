package com.example.ifi_project.repository;

import com.example.ifi_project.model.Category;
import com.example.ifi_project.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<List<Category>> findAllByDeletedIsFalse();

    Optional<List<Category>> findCategoryByIdUserAndDeletedIsFalse(Long id);

    Optional<Category> findCategoryByIdAndDeletedIsFalse(Long id);
}
