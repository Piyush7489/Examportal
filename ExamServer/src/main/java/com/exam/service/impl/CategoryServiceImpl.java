package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.exam.entity.quize.Category;
import com.exam.repo.CategoryRepo;
import com.exam.service.CategoryService;
import com.portal.app.helper.CategoryResponse;
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
	public CategoryResponse getCategories(Integer pageNo, Integer pageSize, String sortBy,String sortDir) {

		Sort sort = sortDir.equalsIgnoreCase("asc")?Sort.by(sortBy).ascending():Sort.by(sortBy).descending();
		Pageable p = PageRequest.of(pageNo, pageSize,sort);
		Page<Category> page = this.cr.findAll(p);
		CategoryResponse catRes = new CategoryResponse();
		catRes.setContents(page.getContent());
		catRes.setPageNo(page.getNumber());
		catRes.setPageSize(page.getSize());
		catRes.setTotalElements(page.getTotalElements());
		catRes.setTotalPages(page.getTotalPages());
		catRes.setLastPage(page.isLast());
		return catRes;
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
	
	@Override
	public Set<Category> getAllCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet( this.cr.findAll());
	}

}
