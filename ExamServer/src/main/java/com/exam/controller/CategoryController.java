package com.exam.controller;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.quize.Category;
import com.exam.service.CategoryService;
import com.portal.app.helper.AppConstants;
import com.portal.app.helper.CategoryResponse;

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
	@GetMapping("/admin")
	public ResponseEntity<CategoryResponse> getCategoiess(
			@PathVariable(value = "pageNo" , required = false) Integer pageNo,
			@PathVariable(value = "pageSize", required = false) Integer pageSize,
			@PathVariable(value = "sortBy", required = false) String sortBy,
			@PathVariable (value = "sortDir",required = false)String sortDir
			)
	{
		CategoryResponse categories = this.cs.getCategories(pageNo, pageSize,sortBy,sortDir);
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
	
//	GET ALL CATEGORIES FOR USER
	@GetMapping("/")
	public ResponseEntity<Set<Category>> getAllCategories()
	{
		Set<Category> categories = this.cs.getAllCategories();
		return ResponseEntity.ok(categories);
	}
}
