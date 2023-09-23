package com.exam.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.quize.Question;
import com.exam.entity.quize.Quize;

public interface QuestionRepo extends JpaRepository<Question, Long> {

	Set<Question> findByQuize(Quize quize);

}
