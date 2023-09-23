package com.exam.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.User;
import com.exam.entity.quize.Result;

public interface ResultRepo extends JpaRepository<Result, Long> {

	List<Result> findByUser(User user);
}
