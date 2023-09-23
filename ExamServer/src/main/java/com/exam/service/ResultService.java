package com.exam.service;

import java.util.List;

import com.exam.entity.quize.Result;

public interface ResultService {

//	Get result By User Id
	
	List<Result> getResult(Long userId);
	
	Result saveResult(Result result);
	
	Result getSingleResult(Long id);
}
