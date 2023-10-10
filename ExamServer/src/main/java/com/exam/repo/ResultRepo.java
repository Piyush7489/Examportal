package com.exam.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.exam.entity.User;
import com.exam.entity.quize.Quize;
import com.exam.entity.quize.Result;

public interface ResultRepo extends JpaRepository<Result, Long> {

	List<Result> findByUser(User user);
	
//	@Query(value="select * from examportal.quize where examportal.quize.title like %:key%",nativeQuery = true)
//	public List<Result> Searching(String key);
//	

	List<Result> findByUserAndQuize(User user, Quize quize);
}
