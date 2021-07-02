package com.example.ifi_project.service;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    public List<Question> getAllQuestion(){
        return questionRepository.findAll();
    }
    public List<Question> getQuestion(){
        return questionRepository.getQuestion();
    }

    public Optional<Question> getQuestionById(Long id){
        return questionRepository.findById(id);
    }

    public void deleteQuestionById(Long id){
        LocalDate localDate = LocalDate.now();
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        question.setDeleted(true);
        question.setDelete_date(localDate);
        questionRepository.save(question);
    }

    public void restoreQuestionById(Long id){
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        question.setDeleted(false);
        question.setDelete_date(null);
        questionRepository.save(question);
    }
}
