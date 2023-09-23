package com.exam.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.quize.Category;
import com.exam.entity.quize.Quize;

public interface QuizeRepo extends JpaRepository<Quize, Long> {
	
	public List<Quize> findByCategory(Category category);
	
//	For Active Quizzes
	public List<Quize> findByActive(Boolean b);
	
	public List<Quize> findByCategoryAndActive(Category category,Boolean b);

}
