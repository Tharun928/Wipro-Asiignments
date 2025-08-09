package com.wipro.tharun.entities;



import com.wipro.tharun.enums.Category;
import com.wipro.tharun.enums.DifficultyLevel;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Question {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String questiontitle;
	
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	
	private String correctans;
	
	@ManyToOne
	@JoinColumn(name = "quiz_id")
	private Quiz quiz;
	
	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	@Enumerated(EnumType.STRING)
	private DifficultyLevel difficultylvl;
	
	@Enumerated(EnumType.STRING)
	private Category category;

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getQuestiontitle() {
		return questiontitle;
	}

	public void setQuestiontitle(String questiontitle) {
		this.questiontitle = questiontitle;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public DifficultyLevel getDifficultylvl() {
		return difficultylvl;
	}

	public void setDifficultylvl(DifficultyLevel difficultylvl) {
		this.difficultylvl = difficultylvl;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getCorrectans() {
		return correctans;
	}

	public void setCorrectans(String correctans) {
		this.correctans = correctans;
	}
	

}

