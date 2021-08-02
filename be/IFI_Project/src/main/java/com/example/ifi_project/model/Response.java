package com.example.ifi_project.model;

import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

@Data
@JsonView(Views.Public.class)
public class Response {
    public boolean status;
    public int code;
    public String message;
    public Object data;
}
