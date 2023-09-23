package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.quize.Question;
import com.exam.entity.quize.Quize;
import com.exam.repo.QuestionRepo;
import com.exam.service.QuestionService;
@Service
public class QuestionServiceImpl implements QuestionService {
	
	@Autowired
	private QuestionRepo qr;
	
	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.qr.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.qr.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<Question>(this.qr.findAll());
	}

	@Override
	public Question getQuetion(Long quetionId) {
		// TODO Auto-generated method stub
		return this.qr.findById(quetionId).get();
	}

	@Override
	public Set<Question> getQuestionsOFQuize(Quize quize) {
		// TODO Auto-generated method stub
		return this.qr.findByQuize(quize);
	}

	@Override
	public void deleteQuestion(Long questionId) {
		// TODO Auto-generated method stub
		Question findById = this.qr.findById(questionId).get();
		if(findById != null)
		{
			this.qr.delete(findById);
		}

	}

	@Override
	public Question getQuestionByID(Long id) {
		// TODO Auto-generated method stub
		return this.qr.getOne(id);
	}

}
