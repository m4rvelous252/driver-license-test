package com.example.ifi_project.service;

import com.example.ifi_project.model.User;
import com.example.ifi_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<User> getUserById(Long id){
        return userRepository.findById(id);
    }

    public User getUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public List<User> getUser(){
        return userRepository.findAll();
    }


    public User registerUser(User user) {
        userRepository.save(user);
        return getUserByUsername(user.getUsername());
    }
}
