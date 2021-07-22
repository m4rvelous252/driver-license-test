package com.example.ifi_project.service;

import com.example.ifi_project.filter.FilterQuestion;
import com.example.ifi_project.model.*;
import com.example.ifi_project.repository.QuestionRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final TypeRepository typeRepository;
    private AnswerService answerService;

    @Autowired
    public QuestionService(QuestionRepository questionRepository, TypeRepository typeRepository) {
        this.questionRepository = questionRepository;
        this.typeRepository = typeRepository;
    }
    public Response getAllQuestion(){
        Response respon = new Response();
        if(questionRepository.findAll().size()==0){
            respon.data = questionRepository.findAll();
            respon = ConstantResponse.responseEmpty(respon);
        }else{
            respon.data = questionRepository.findAll();
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response getQuestionNotDeleted(){
        Response respon = new Response();
        Optional<List<Question>> optionalQuestions = questionRepository.findAllByDeletedIsFalse();
        if(!optionalQuestions.isPresent()){
            respon.data = FilterQuestion.FilterListQuestionsNotDelete(optionalQuestions.get());
            respon = ConstantResponse.responseSuccess(respon);
        }else{
            respon = ConstantResponse.responseEmpty(respon);
        }
        return respon;
    }

    public Response getQuestionByIdNotDeleted(Long id){
        Response respon = new Response();
        Optional<Question> optionalQuestion = questionRepository.findQuestionByIdAndDeletedIsFalse();
        if(!optionalQuestion.isPresent()){
            respon = ConstantResponse.responseNotFount(respon);
        }else{
            respon.data = FilterQuestion.FilterQuestionNotDelete(optionalQuestion.get());
            respon = ConstantResponse.responseSuccess(respon);
        }
        return respon;
    }

    public Response addNewQuestion(Question question) {
        Response respon = new Response();
        if(typeRepository.findById(question.getType_id()).isPresent()){
            question.setDeleted(false);
            LocalDate localDate = LocalDate.now();
            Long id_type = question.getType_id();
            Type type = typeRepository.findById(id_type).get();
            question.setType(type);
            question.setCreate_date(localDate);
            questionRepository.save(question);
            respon = ConstantResponse.responseSaveSuc(respon);
        }else{
            respon = ConstantResponse.responseSaveFail(respon);
        }
        return respon;

    }


    //Not use
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
