package com.exam.entity.quize;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long queId;
	@Column(length = 5000)
	private String content;

	private String image;

	private String option1;

	private String option2;

	private String option3;

	private String option4;
	
	private String answer;
	
	@Transient
	private String givenAnswer;

	@ManyToOne(fetch = FetchType.EAGER)
	private Quize quize;
	
//	@JsonProperty("answer")
//	public void setAnswer(String answer)
//	{
//		this.answer = answer;
//	}
//	@JsonIgnore
//	public String getAnswer()
//	{
//		return answer;
//	}

}
