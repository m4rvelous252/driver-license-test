package com.example.ifi_project.service;

import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.QuizTypeRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class QuizTypeService {
    private final QuizTypeRepository quizTypeRepository;
    private final QuizRepository quizRepository;
    private final TypeRepository typeRepository;

    @Autowired
    public QuizTypeService(QuizTypeRepository quizTypeRepository, QuizRepository quizRepository, TypeRepository typeRepository) {
        this.quizTypeRepository = quizTypeRepository;
        this.quizRepository = quizRepository;
        this.typeRepository = typeRepository;
    }

    public Response getAllQuizType(){
        Response respon = new Response();
        if(quizTypeRepository.findAll().size()==0){
            respon = ConstantResponse.responseEmpty(respon);
        }else {
            respon = ConstantResponse.responseSuccess(respon);
            respon.data = quizTypeRepository.findAll();
        }
        return respon;
    }

    public Response add(QuizType quizType){
        Response respon = new Response();
        if(quizRepository.findById(quizType.getId_quiz()).isPresent()&&typeRepository.findById(quizType.getId_type()).isPresent()){
            Quiz quiz = quizRepository.findById(quizType.getId_quiz()).get();
            Type type = typeRepository.findById(quizType.getId_type()).get();
            int amount = type.getQuestions().size();
            if(quizType.getAmount()>amount){
                quizType.setAmount(amount);
            }
            QuizTypePK quizTypePK = new QuizTypePK();
            quizTypePK.setId_type(type.getId());
            quizTypePK.setId_quiz(quiz.getId());
            quizType.setId(quizTypePK);
            quizType.setQuiz(quiz);
            quizType.setType(type);
            quizTypeRepository.save(quizType);
            respon = ConstantResponse.responseSaveSuc(respon);
        }else{
            respon = ConstantResponse.responseSaveFail(respon);
        }
        return respon;

    }


    //Not use
    public void delete(QuizType quizType){
        QuizTypePK quizTypePK = new QuizTypePK();
        quizTypePK.setId_type(quizType.getId_type());
        quizTypePK.setId_quiz(quizType.getId_quiz());
        quizType.setId(quizTypePK);
        quizTypeRepository.delete(quizType);
    }


}
