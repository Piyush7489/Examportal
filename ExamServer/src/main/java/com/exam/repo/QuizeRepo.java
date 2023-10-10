package com.exam.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.exam.entity.quize.Category;
import com.exam.entity.quize.Quize;
import com.exam.entity.quize.Result;

public interface QuizeRepo extends JpaRepository<Quize, Long> {
	
	public List<Quize> findByCategory(Category category);
	
//	For Active Quizzes
	public List<Quize> findByActive(Boolean b);
	
	public List<Quize> findByCategoryAndActive(Category category,Boolean b);
	
	@Query(value="select * from examportal.quize where examportal.quize.title like %:key%",nativeQuery = true)
	public Long Searching(String key);

}
