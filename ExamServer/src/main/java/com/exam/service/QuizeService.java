package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.entity.quize.Category;
import com.exam.entity.quize.Quize;

public interface QuizeService {
	
	Quize addQuize(Quize quize);
	
	Quize updateQuize(Quize quize);
	
	Set<Quize> getQuizzes();
	
	Quize getQuize(Long quizeId);
	
	void ddeleteQuize(Long quizeId);
	
	List<Quize>getQuizzesOfCategory(Category category);
	
	List<Quize> getActiveQuizzes();
	
	List<Quize> getActicveQuizzesOfCategory(Category category);
	
}
