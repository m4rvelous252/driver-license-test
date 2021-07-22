package com.example.ifi_project.mapper;

import com.example.ifi_project.model.Quiz;
import com.example.ifi_project.model.Type;
import com.example.ifi_project.modelDTO.QuizDTO;
import com.example.ifi_project.modelDTO.TypeDTO;

import java.util.ArrayList;
import java.util.List;

public class MapperQuiz {
    public static QuizDTO MapperToDTO(Quiz quiz){
        QuizDTO quizDTO = new QuizDTO(quiz);
        return quizDTO;
    }

    public static List<QuizDTO> MapperListToDTO(List<Quiz> quizzes){
        List<QuizDTO> quizDTOs = new ArrayList<>();
        for (Quiz q: quizzes) {
            quizDTOs.add(MapperToDTO(q));
        }
        return quizDTOs;
    }

}
