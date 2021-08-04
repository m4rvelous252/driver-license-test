package com.example.ifi_project.service;

import com.example.ifi_project.filter.FilterQuiz;
import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.CategoryRepository;
import com.example.ifi_project.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class QuizService {
    private final QuizRepository quizRepository;
    private final CategoryRepository categoryRepository;
    private final QuizTypeService quizTypeService;

    private Random random = new Random();

    @Autowired
    public QuizService(QuizRepository quizRepository, CategoryRepository categoryRepository, QuizTypeService quizTypeService) {
        this.quizRepository = quizRepository;
        this.categoryRepository = categoryRepository;
        this.quizTypeService = quizTypeService;
    }

    public Response getAllQuiz(){
        Response respon = new Response();
        if(quizRepository.findAll().size()==0){
            respon.data = quizRepository.findAll();
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data = quizRepository.findAll();
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getQuizNotDelete(){
        Response respon = new Response();
        Optional<List<Quiz>> quizzes = quizRepository.findAllByDeletedIsFalse();
        if(!quizzes.isPresent()){
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data = FilterQuiz.FilterListQuizzesNotDelete(quizzes.get());
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getQuizByIdNotDelete(Long id){
        Response respon = new Response();
        Optional<Quiz> optionalQuiz = quizRepository.findByIdAndDeletedIsFalse(id);
        if(!optionalQuiz.isPresent()){
            respon = ConstantResponse.responseNotFount(respon);
        }else{
            Quiz quiz = optionalQuiz.get();
            respon.data = FilterQuiz.FilterQuizNotDelete(quiz);
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response addNewQuiz(Quiz quiz) {
        Response respon = new Response();
        if(categoryRepository.findById(quiz.getId_category()).isPresent()){
            quiz.setCategory(categoryRepository.findById(quiz.getId_category()).get());
            quizRepository.save(quiz);
            List<QuizType> quizTypeList = new ArrayList<>();
            for (QuizType qt: quiz.getQuizType()) {
                if(qt.getAmount()>0){
                    qt.setId_quiz(quiz.getId());
                    qt.setId_type(qt.getType().getId());
                    quizTypeList.add(qt);
                    quizTypeService.add(qt);
                }
            }
            respon = ConstantResponse.responseSaveSuc(respon);
            respon.data = quiz;
        }else{
            respon = ConstantResponse.responseSaveFail(respon);
        }
        return respon;
    }

    public Response getTestByQuiz(Long id){
        Response respon = new Response();
        Optional<Quiz> quizOptional = quizRepository.findByIdAndDeletedIsFalse(id);
        if(quizOptional.isPresent()){
            Quiz quiz = FilterQuiz.FilterQuizNotDelete(quizOptional.get());
            Test test = new Test();
            List<Question> questions = new ArrayList<>();
            //Get Random question in type of quiz
            for (QuizType quizType:quiz.getQuizType()) {
                List<Question> tempQuestions = new ArrayList(quizType.getType().getQuestions());
                int amount = quizType.getAmount();
                if(amount > quizType.getType().getQuestions().size()){
                    amount = quizType.getType().getQuestions().size();
                }

                //Get Random answer in question on type
                for (int i=0 ;i<amount;i++){
                    int index = random.nextInt(tempQuestions.size());
                    Question question = tempQuestions.get(index);
                    questions.add(question);
                    tempQuestions.remove(index);
                }
            }
            test.setQuiz(quiz);
            test.setQuestions(randomQuestionHideCorrectAnswer(questions));
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = test;
        }else {
            respon = ConstantResponse.responseNotFount(respon);
        }
        return respon;
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

    //Not use
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


    //


}
