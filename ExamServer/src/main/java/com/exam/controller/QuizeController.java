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
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.quize.Category;
import com.exam.entity.quize.Quize;
import com.exam.service.QuizeService;

@RestController
@RequestMapping("/quize")
@CrossOrigin("*")
public class QuizeController {
	@Autowired
	private QuizeService qs;
	
//	ADD
	@PostMapping("/")
	public ResponseEntity<Quize> addQuize(@RequestBody Quize quize)
	{
		Quize addQuize = this.qs.addQuize(quize);
		return ResponseEntity.ok(addQuize);
	}
	
//	UPDATE
	@PutMapping("/")
	public ResponseEntity<Quize> updateQuize(@RequestBody Quize quize)
	{
		Quize updateQuize = this.qs.updateQuize(quize);
		return ResponseEntity.ok(updateQuize);
	}
	
//	GET ALL
	@GetMapping("/")
	public ResponseEntity<Set<Quize>> getAllQuize()
	{
		Set<Quize> quizzes = this.qs.getQuizzes();
		return ResponseEntity.ok(quizzes);
	}
	
//	GET BY ID
	@GetMapping("/{quizeId}")
	public ResponseEntity<Quize> getQuize(@PathVariable Long quizeId)
	{
		Quize quize = this.qs.getQuize(quizeId);
		return ResponseEntity.ok(quize);
	}
	
//	DELETE
	@DeleteMapping("/{quizeId}")
	public void deleteQuize(@PathVariable Long quizeId)
	{
		this.qs.ddeleteQuize(quizeId);
	}
	
//	GET CATEGORY
	@GetMapping("/category/{catId}")
	public ResponseEntity<List<Quize>> getQuizzesOfCategory(@PathVariable Long catId)
	{
		Category category = new Category(); 
		category.setId(catId);
		return ResponseEntity.ok(this.qs.getQuizzesOfCategory(category));
	}
	
//	get Active Quizzes
	@GetMapping("/active")
	public ResponseEntity<List<Quize>> getActiveQuizzes()
	{
		return ResponseEntity.ok(this.qs.getActiveQuizzes());
	}
	
	@GetMapping("/category/active/{catId}")
	public ResponseEntity<List<Quize>> getActiveQuizzesOfCategory(@PathVariable Long catId )
	{
		Category category = new Category();
		category.setId(catId);
		return ResponseEntity.ok(this.qs.getActicveQuizzesOfCategory(category));
		
	}

}
