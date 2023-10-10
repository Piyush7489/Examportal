package com.exam.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.quize.Result;
import com.exam.repo.UserRepo;
import com.exam.service.QuizeService;
import com.exam.service.ResultService;

@RestController
@RequestMapping("/result")
@CrossOrigin("*")
public class ResultController {

	@Autowired
	private ResultService rs;
	
	@Autowired
	private QuizeService qs;
	
	@Autowired
	private UserRepo ur;

	@GetMapping("/{userId}")
	public ResponseEntity<List<Result>> getResult(@PathVariable Long userId) {
		
		List<Result> result = this.rs.getResult(userId);
		System.out.println(result);
		Collections.reverse(result);
		System.out.println(result);
//		getSingleResult();
		return ResponseEntity.ok(result);
	}
	
	@GetMapping("/single/{id}")
	public ResponseEntity<Result> getSingleResult(@PathVariable Long id)
	{
		Result result = this.rs.getSingleResult(id);
		return new ResponseEntity<Result>(result,HttpStatus.OK);
	}
	
	@GetMapping("/search/{key}/{userId}")
	public ResponseEntity<List<Result>> search(@PathVariable String key,@PathVariable Long userId)
	{
		Long qId = this.qs.SearchResult(key);
		return ResponseEntity.ok(this.rs.getSearch(this.ur.findById(userId).get(),this.qs.getQuize(qId) ));
	}
}
