package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.quize.Category;
import com.exam.repo.CategoryRepo;
import com.exam.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService {
	
	@Autowired
	private CategoryRepo cr;
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return this.cr.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return this.cr.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet( this.cr.findAll());
	}

	@Override
	public Category getCategoryyById(Long categoryId) {
		// TODO Auto-generated method stub
		return this.cr.findById(categoryId).get();
	}

	@Override
	public void deleteCategory(Long categoryId) {
		// TODO Auto-generated method stub
		Category category = this.cr.findById(categoryId).get();
		if(category != null)
		{
			this.cr.delete(category);
		}
	}

}
