package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.quize.Category;
import com.exam.entity.quize.Quize;
import com.exam.repo.QuizeRepo;
import com.exam.service.QuizeService;
@Service
public class QuizeServiceImpl implements QuizeService {

	@Autowired
	private QuizeRepo qr;
	
	@Override
	public Quize addQuize(Quize quize) {
		// TODO Auto-generated method stub
		return this.qr.save(quize);
	}

	@Override
	public Quize updateQuize(Quize quize) {
		// TODO Auto-generated method stub
		return this.qr.save(quize);
	}

	@Override
	public Set<Quize> getQuizzes() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.qr.findAll());
	}

	@Override
	public Quize getQuize(Long quizeId) {
		// TODO Auto-generated method stub
		return this.qr.findById(quizeId).get();
	}

	@Override
	public void ddeleteQuize(Long quizeId) {
		// TODO Auto-generated method stub
		Quize quize = this.qr.findById(quizeId).get();
		System.out.println(quize);
		if(quize != null)
		{
			System.out.println("HELLO");
			this.qr.deleteById(quizeId);
		}

	}

	@Override
	public List<Quize> getQuizzesOfCategory(Category category) {
		
		return this.qr.findByCategory(category);
	}

	@Override
	public List<Quize> getActiveQuizzes() {
		// TODO Auto-generated method stub
		return this.qr.findByActive(true);
	}

	@Override
	public List<Quize> getActicveQuizzesOfCategory(Category category) {
		
		return this.qr.findByCategoryAndActive(category, true);
	}
	
	

}
