package com.exam.service;

import java.util.Set;

import com.exam.entity.quize.Category;

public interface CategoryService {
	
//	ADD CATEGORY
	public Category addCategory(Category category);
	
//	UPDATE
	public Category updateCategory(Category category);
	
//	GET ALL
	Set<Category> getCategories();
//	GET BY ID
	Category getCategoryyById(Long categoryId);
	
//	DELETE BY ID
	
	void deleteCategory(Long categoryId);
}
