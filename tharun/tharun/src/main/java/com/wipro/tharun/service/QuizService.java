package com.wipro.tharun.service;

import java.util.List;

import com.wipro.tharun.entities.QuestionWrapper;


public interface QuizService {

	
	List<QuestionWrapper> getquizques(Long quizId);

}
