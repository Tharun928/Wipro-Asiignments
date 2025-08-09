package com.wipro.tharun.service;

import java.util.List;

import com.wipro.tharun.entities.Question;


public interface QuestionService {

	
	
	Question addQues(Question que);
	
	List<Question> getAllQues();
	
	Question updateQues(Long id, Question que);

	void deleque(Long id);
	
}
