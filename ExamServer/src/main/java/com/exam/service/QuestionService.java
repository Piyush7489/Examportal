package com.exam.service;

import java.util.Set;

import com.exam.entity.quize.Question;
import com.exam.entity.quize.Quize;

public interface QuestionService {
		
	Question addQuestion(Question question);
	
	Question updateQuestion(Question question);
	
	Set<Question> getQuestions();
	
	Question getQuetion(Long quetionId);
	
	Set<Question> getQuestionsOFQuize(Quize quize);
	
	void deleteQuestion(Long questionId);
	
	Question getQuestionByID(Long id);
}
