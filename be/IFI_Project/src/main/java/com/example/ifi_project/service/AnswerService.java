package com.example.ifi_project.service;

import com.example.ifi_project.model.Answer;
import com.example.ifi_project.model.Question;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;

    @Autowired
    public AnswerService(AnswerRepository answerRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
    }

    public List<Answer> getAnswer(){
        return answerRepository.findAll();
    }

    public void addNewAnswer(List<Answer> answers) {
        LocalDate localDate = LocalDate.now();
        Question question = questionRepository.findById(answers.get(0).getQuestion_id())
                .orElseThrow(() -> new IllegalStateException(" id: " + answers.get(0).getQuestion_id()+" does not exisits"));
        for (Answer answer : answers){
            answer.setQuestion(question);
            answer.setCreate_date(localDate);
            answerRepository.save(answer);
        };
    }

}
