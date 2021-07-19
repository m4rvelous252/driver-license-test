package com.example.ifi_project.controller;

import com.example.ifi_project.model.*;
import com.example.ifi_project.service.TypeService;
import com.example.ifi_project.service.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/user")
@CrossOrigin
@JsonView(Views.Public.class)
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path="login")
    public Response getUserLogin(@RequestBody User user) {
        Response respon = new Response();
        User reqUser = userService.getUserByUsername(user.getUsername());
        if(reqUser == null ||reqUser.getPassword().equals(user.getPassword())){
            respon = ConstantResponse.responseSaveFail(respon);
        }else {
            respon = ConstantResponse.responseLoginSuc(respon);
            respon.data = reqUser;
        }
        return respon;
    }

    @PostMapping(path="getUser")
    public User getUserByUsername(@RequestBody User user) {
        return userService.getUserByUsername(user.getUsername());
    }

    @PostMapping(path="register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

    @GetMapping()
    public List<User> getUse() {
        return userService.getUser();
    }

}
