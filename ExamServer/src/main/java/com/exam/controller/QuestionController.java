package com.exam.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
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

import com.exam.entity.User;
import com.exam.entity.quize.Question;
import com.exam.entity.quize.Quize;
import com.exam.entity.quize.Result;
import com.exam.repo.UserRepo;
import com.exam.service.QuestionService;
import com.exam.service.QuizeService;
import com.exam.service.ResultService;
import com.exam.service.UserService;

@RestController
@RequestMapping("/question")
@CrossOrigin("*")
public class QuestionController {
	
	@Autowired
	private QuestionService qs;
	
	@Autowired
	private QuizeService qss;
	
	@Autowired
	private ResultService rs;
	
	@Autowired
	private UserRepo ur;
	
//	ADD
	@PostMapping("/")
	public ResponseEntity<Question> add(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.qs.addQuestion(question));
	}
//	UPDATE
	@PutMapping("/")
	public ResponseEntity<Question> update(@RequestBody Question question)
	{
		return ResponseEntity.ok(this.qs.addQuestion(question));
	}
	
//	GET ALL of Quize
	@GetMapping("/quize/{qid}")
	public ResponseEntity<?> getAllOfQuize(@PathVariable Long qid)
	{
//		Quize quize = new Quize();
//		quize.setId(qid);
//		return ResponseEntity.ok(this.qs.getQuestionsOFQuize(quize));
		Quize quize = this.qss.getQuize(qid);
		Set<Question> questions = quize.getQuestions();
		@SuppressWarnings("unchecked")
		List<Question> list = new ArrayList(questions);
		if(list.size()>Integer.parseInt(quize.getNumberOfQuestions()))
		{
			list = list.subList(0, Integer.parseInt(quize.getNumberOfQuestions()));
		}
		list.forEach((q)->{
			q.setAnswer("");
		});
			
		Collections.shuffle(list);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/quize/all/{qid}")
	public ResponseEntity<?> getAllOfQuizeAdmin(@PathVariable Long qid)
	{
//		Quize quize = new Quize();
//		quize.setId(qid);
//		return ResponseEntity.ok(this.qs.getQuestionsOFQuize(quize));
		Quize quize = this.qss.getQuize(qid);
		Set<Question> questions = quize.getQuestions();
		return ResponseEntity.ok(questions);
	}
	
//	GET SINGLE QUESTOIN
	@GetMapping("/{questionId}")
	public ResponseEntity<Question> get(@PathVariable Long questionId)
	{
		return ResponseEntity.ok(this.qs.getQuetion(questionId));
	}
	
//	DELETE
	@DeleteMapping("/{questionId}")
	public void delete(@PathVariable Long questionId)
	{
		this.qs.deleteQuestion(questionId);
	}
	
//	Evaluat Quize
	@PostMapping("/eval-quize/{userId}")
	public ResponseEntity<?> evalQuize(@RequestBody List<Question> list,@PathVariable Long userId)
	{
		double marksGot = 0;
		Integer currectAnswers =0;
		Integer attempted =0;
		Integer timeOfQuize = 0;
		User user = new User();
		Result result = new Result();
		for(Question q :list){
//			Single Questions
			Question question = this.qs.getQuestionByID(q.getQueId());
			result.setQuize(question.getQuize());
			result.setUser(this.ur.findById(userId).get());
			timeOfQuize = Integer.parseInt(question.getQuize().getNumberOfQuestions());
			if(question.getAnswer().equals(q.getGivenAnswer()))
			{
				currectAnswers++;
				Double singleMarks = Double.parseDouble(list.get(0).getQuize().getMaxMarks())/list.size();
				marksGot += singleMarks;
			}
			if(q.getGivenAnswer()!=null )
			{
				attempted++;
			}
		}
		
		result.setAttempted(attempted);
		result.setCurrectAnswers(currectAnswers);
		result.setMarksGot(marksGot);
		result.setQuizeTime((timeOfQuize*2));
		
		Result saveResult = this.rs.saveResult(result);
		System.out.println(saveResult);
		
		Map<Object, Object> map = Map.of("marksGot",marksGot,"currectAnswers",currectAnswers,"attempted",attempted);
		return ResponseEntity.ok(map);
	}
}
