package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.AnswerRepository;
import com.example.ifi_project.repository.CategoryRepository;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.HistoryTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class HistoryTestService {
    private final QuizRepository quizRepository;
    private final HistoryTestRepository historytestRepository;
    private final AnswerRepository answerRepository;
    private final CategoryRepository categoryRepository;

    private Random random = new Random();

    @Autowired
    public HistoryTestService(QuizRepository quizRepository, HistoryTestRepository historyTestRepository, AnswerRepository answerRepository, CategoryRepository categoryRepository) {
        this.quizRepository = quizRepository;
        this.historytestRepository = historyTestRepository;
        this.answerRepository = answerRepository;
        this.categoryRepository = categoryRepository;
    }

    public Response getHistoryTest(){
        Response respon = new Response();
        if(historytestRepository.findAll().size()==0){
            respon.data= historytestRepository.findAll();
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data= historytestRepository.findAll();
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getHistoryTestById(Long id){
        Response respon = new Response();
        if(historytestRepository.findById(id).isPresent()){
            respon.data= historytestRepository.findById(id).get();
            respon = ConstantResponse.responseSuccess(respon);
        }else{
            respon = ConstantResponse.responseNotFount(respon);
        }
        return respon;
    }

    public Response getHistoryTestByIdUser(Long idUser){
        Response respon = new Response();
        if(historytestRepository.findByIdUser(idUser,Sort.by(Sort.Direction.DESC, "create_date")).size()==0){
            respon.data= historytestRepository.findByIdUser(idUser,Sort.by(Sort.Direction.DESC, "create_date"));
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data= historytestRepository.findByIdUser(idUser,Sort.by(Sort.Direction.DESC, "create_date"));
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response addNewTest(HistoryTest historyTest) {
        Response respon = new Response();
        int mark = 0;
        for (HistoryQuestion question: historyTest.getQuestions()) {
            Boolean is_correct = true;
            question.setId(null);
            for (HistoryAnswer answer:question.getAnswers()) {
                Answer ans;
                if(!answerRepository.findById(answer.getId()).isPresent()){
                    respon = ConstantResponse.responseNotFount(respon);
                    return respon;
                }
                ans = answerRepository.findById(answer.getId()).get();
                answer.setIs_correct(ans.getIs_correct());
                answer.setText(ans.getText());
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
        if(historyTest.getMark()>historyTest.getPassMark()){
            historyTest.setPass(true);
        }else{
            historyTest.setPass(false);
        }
        Category category = categoryRepository.findById(historyTest.getId_category()).get();
        category.setSubmit(category.getSubmit()+1);
        categoryRepository.save(category);
        Quiz quiz = quizRepository.findById(historyTest.getIdQuiz()).get();
        quiz.setSubmit(quiz.getSubmit()+1);
        quizRepository.save(quiz);
        historytestRepository.save(historyTest);
        respon = ConstantResponse.responseSaveSuc(respon);
        respon.data = historyTest;
        return respon;
    }



}
