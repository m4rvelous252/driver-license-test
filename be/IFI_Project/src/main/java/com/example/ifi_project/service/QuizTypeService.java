package com.example.ifi_project.service;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.QuizType;
import com.example.ifi_project.model.QuizTypePK;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.repository.QuizRepository;
import com.example.ifi_project.repository.QuizTypeRepository;
import com.example.ifi_project.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public List<QuizType> getAllQuizType(){
        return quizTypeRepository.findAll();
    }

    public void add(QuizType quizType){
        Quiz quiz = quizRepository.findById(quizType.getId_quiz())
                .orElseThrow(() -> new IllegalStateException(" quiz id does not exisits"));
        Type type = typeRepository.findById(quizType.getId_type())
                .orElseThrow(() -> new IllegalStateException(" type id: does not exisits"));
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
    }

    public void delete(QuizType quizType){
        QuizTypePK quizTypePK = new QuizTypePK();
        quizTypePK.setId_type(quizType.getId_type());
        quizTypePK.setId_quiz(quizType.getId_quiz());
        quizType.setId(quizTypePK);
        quizTypeRepository.delete(quizType);
    }


}
