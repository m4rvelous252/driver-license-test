package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.HistoryTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class HistoryTestService {
    private final QuizRepository quizRepository;
    private final HistoryTestRepository historytestRepository;
    private final AnswerRepository answerRepository;

    private Random random = new Random();

    @Autowired
    public HistoryTestService(QuizRepository quizRepository, HistoryTestRepository historyTestRepository, AnswerRepository answerRepository) {
        this.quizRepository = quizRepository;
        this.historytestRepository = historyTestRepository;
        this.answerRepository = answerRepository;
    }

    public List<HistoryTest> getHistoryTest(){
        return historytestRepository.findAll();
    }

    public Optional<HistoryTest> getHistoryTestById(Long id){
        return historytestRepository.findById(id);
    }

    public HistoryTest addNewTest(HistoryTest historyTest) {
        int mark = 0;
        for (HistoryQuestion question: historyTest.getQuestions()) {
            Boolean is_correct = true;
            question.setId(null);
            for (HistoryAnswer answer:question.getAnswers()) {
                Answer ans = answerRepository.findById(answer.getId())
                        .orElseThrow(() -> new IllegalStateException(" id: does not exisits"));
                answer.setIs_correct(ans.getIs_correct());
                if(answer.getIs_correct()!=answer.getIs_select()){
                    is_correct=false;
                }
                answer.setId(null);
            }
            question.setIs_correct(is_correct);
            if(is_correct){
                mark++;
            }
        }
        historyTest.setMark(mark);
        historytestRepository.save(historyTest);
        return historyTest;
    }

}
