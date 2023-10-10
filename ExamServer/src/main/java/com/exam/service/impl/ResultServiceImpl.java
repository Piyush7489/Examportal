package com.exam.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.entity.quize.Quize;
import com.exam.entity.quize.Result;
import com.exam.repo.ResultRepo;
import com.exam.repo.UserRepo;
import com.exam.service.ResultService;

@Service
public class ResultServiceImpl implements ResultService {

	@Autowired
	private ResultRepo rr;
	
	@Autowired
	private UserRepo ur;
	
	@Override
	public List<Result> getResult(Long userId) {
		// TODO Auto-generated method stub
		User findById = this.ur.findById(userId).get();
		System.out.println(findById);
		return this.rr.findByUser(findById);
	}

	@Override
	public Result saveResult(Result result) {
		// TODO Auto-generated method stub
		return this.rr.save(result);
	}

	@Override
	public Result getSingleResult(Long Id) {
		// TODO Auto-generated method stub
		return this.rr.findById(Id).get();
	}

	@Override
	public List<Result> getSearch(User user, Quize quize) {
		System.out.println(this.rr.findByUserAndQuize(user, quize));
		
		return this.rr.findByUserAndQuize(user, quize);
	}

}
