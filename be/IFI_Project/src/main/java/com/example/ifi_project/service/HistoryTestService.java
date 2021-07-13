package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.HistoryTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class HistoryTestService {
    private final QuizRepository quizRepository;
    private final HistoryTestRepository historytestRepository;

    private Random random = new Random();

    @Autowired
    public HistoryTestService(QuizRepository quizRepository, HistoryTestRepository historyTestRepository) {
        this.quizRepository = quizRepository;
        this.historytestRepository = historyTestRepository;
    }

    public List<HistoryTest> getHistoryTest(){
        return historytestRepository.findAll();
    }

    public Optional<HistoryTest> getHistoryTestById(Long id){
        return historytestRepository.findById(id);
    }

    public void addNewTest(HistoryTest historyTest) {

    }

    public Test getTestByQuiz(Long id){
        Test test = new Test();
        List<Question> questions = new ArrayList<>();
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        //Get Random question in type of quiz
        for (QuizType quizType:quiz.getQuizType()) {
            List<Question> tempQuestions = new ArrayList(quizType.getType().getQuestions());
            int amount = quizType.getAmount();
            //Get Rabdom answer in question on type
            for (int i=0 ;i<amount;i++){
                List<Answer> answers = new ArrayList<>();
                int index = random.nextInt(tempQuestions.size());
                List<Answer> tempAnswers = tempQuestions.get(index).getAnswers();
                int sizeOfAnswers = tempAnswers.size();
                for (int j=0;j<sizeOfAnswers;j++){
                    int indexA = random.nextInt(tempAnswers.size());
                    answers.add(tempAnswers.get(indexA));
                    tempAnswers.remove(indexA);
                }
                Question question = tempQuestions.get(index);
                question.setAnswers(answers);
                questions.add(question);
                tempQuestions.remove(index);
            }

        }

        test.setQuiz(quiz);
        test.setQuestions(questions);
        return test;
    }

    public Test saveTestWithid(Test test, Long userId){
        HistoryTest historyTest = convertTesttoHistoryTest(test);
        historyTest.setId_user(userId);
        historytestRepository.save(historyTest);
        test.setId(historyTest.getId());
        return test;
    }

    public HistoryTest convertTesttoHistoryTest(Test test){
        LocalDate localDate = LocalDate.now();
        HistoryTest historyTest = new HistoryTest();
        historyTest.setCreate_date(localDate);
        historyTest.setName(test.getQuiz().getName());
        historyTest.setTime(test.getQuiz().getTime());
        for (Question q: test.getQuestions()) {
            HistoryQuestion historyQuestion = new HistoryQuestion();
            historyQuestion.setHistoryTest(historyTest);
            historyQuestion.setDead_point(q.isDead_point());
            historyQuestion.setImg(q.getImg());
            historyQuestion.setText(q.getText());
            for (Answer a: q.getAnswers()) {
                HistoryAnswer historyAnswer = new HistoryAnswer();
                historyAnswer.setHistoryQuestion(historyQuestion);
                historyAnswer.setText(a.getText());
                historyAnswer.setImg(a.getImg());
                historyAnswer.setIs_correct(a.getIs_correct());
            }
        }
        return historyTest;
    }

}
