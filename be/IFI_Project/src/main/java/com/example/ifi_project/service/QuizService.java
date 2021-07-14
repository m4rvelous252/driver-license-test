package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class QuizService {
    private final QuizRepository quizRepository;

    private Random random = new Random();

    @Autowired
    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuiz(){
        return quizRepository.findAll();
    }

    public List<Quiz> getQuiz(){
        return quizRepository.getQuiz();
    }

    public Optional<Quiz> getQuizById(Long id){
        return quizRepository.findById(id);
    }

    public void addNewQuiz(Quiz quiz) {
        quiz.setDeleted(false);
        LocalDate localDate = LocalDate.now();
        quiz.setCreate_date(localDate);
        System.out.println(quiz);
        quizRepository.save(quiz);
    }

    public void deleteQuizById(Long id){
        LocalDate localDate = LocalDate.now();
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        quiz.setDeleted(true);
        quiz.setDelete_date(localDate);
        quizRepository.save(quiz);
    }

    public void restoreQuizById(Long id){
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException(" id: " + id + "does not exisits"));
        quiz.setDeleted(false);
        quiz.setDelete_date(null);
        quizRepository.save(quiz);
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
            if(amount > quizType.getType().getQuestions().size()){
                amount = quizType.getType().getQuestions().size();
            }
            //Get Rabdom answer in question on type
            for (int i=0 ;i<amount;i++){
                int index = random.nextInt(tempQuestions.size());
                Question question = tempQuestions.get(index);
                questions.add(question);
                tempQuestions.remove(index);
            }

        }
        test.setQuiz(quiz);
        test.setQuestions(randomQuestionHideCorrectAnswer(questions));
        return test;
    }

    public List<Question> randomQuestionHideCorrectAnswer(List<Question>questions){
        List<Question> reQuestions = new ArrayList<>();
        int sizeOfQuestions = questions.size();
        for(int i=0; i < sizeOfQuestions; i++) {
            int index = random.nextInt(questions.size());
            Question question = questions.get(index);
            List<Answer> answers = new ArrayList<>();
            List<Answer> tempAnswers = question.getAnswers();
            int sizeOfAnswers = tempAnswers.size();
            for (int j = 0; j < sizeOfAnswers; j++) {
                int indexA = random.nextInt(tempAnswers.size());
                tempAnswers.get(indexA).setIs_correct(null);
                answers.add(tempAnswers.get(indexA));
                tempAnswers.remove(indexA);
            }
            question.setAnswers(answers);
            reQuestions.add(question);
            questions.remove(index);
        }
        return reQuestions;
    }

}
