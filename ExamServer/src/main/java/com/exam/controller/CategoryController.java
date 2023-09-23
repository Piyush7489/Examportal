package com.exam.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.quize.Category;
import com.exam.service.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {
	
	@Autowired 
	private CategoryService cs;
	
//	ADD CATEGORY
	
	@PostMapping("/")
	public ResponseEntity<Category> addCategory(@RequestBody Category category)
	{
		Category category1 = this.cs.addCategory(category);
		return ResponseEntity.ok(category1);
	}
	
//	Get CATEGORY
	@GetMapping("/{categotyId}")
	public ResponseEntity<Category> getCategory(@PathVariable Long categotyId)
	{
		Category categoryyById = this.cs.getCategoryyById(categotyId);
		return ResponseEntity.ok(categoryyById);
	}
	
//	GET ALL CATEGORIES
	@GetMapping("/")
	public ResponseEntity<Set<Category>> getCategoies()
	{
		Set<Category> categories = this.cs.getCategories();
		return ResponseEntity.ok(categories);
	}
	
//	UPDATE
	@PutMapping("/")
	public ResponseEntity<Category> updateCategory(@RequestBody Category category)
	{
		Category updateCategory = this.cs.updateCategory(category);
		return ResponseEntity.ok(updateCategory);
	}
	
//	DELETE
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable Long categoryId)
	{
		this.cs.deleteCategory(categoryId);
	}
}
