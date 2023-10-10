package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.entity.quize.Category;
import com.portal.app.helper.CategoryResponse;

public interface CategoryService {
	
//	ADD CATEGORY
	public Category addCategory(Category category);
	
//	UPDATE
	public Category updateCategory(Category category);
	
//	GET ALL
	CategoryResponse getCategories(Integer pageNo, Integer pageSize, String sortBy,String sortDir);
	
//	GET ALL FOR USER
	Set<Category> getAllCategories();
//	GET BY ID
	Category getCategoryyById(Long categoryId);
	
//	DELETE BY ID
	
	void deleteCategory(Long categoryId);
}
