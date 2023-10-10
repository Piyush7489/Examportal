package com.exam.service;

import java.util.List;

import com.exam.entity.User;
import com.exam.entity.quize.Quize;
import com.exam.entity.quize.Result;

public interface ResultService {

//	Get result By User Id
	
	List<Result> getResult(Long userId);
	
	Result saveResult(Result result);
	
	Result getSingleResult(Long id);
	
	List<Result> getSearch(User user, Quize quize);
}
