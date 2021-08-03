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
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
    
    
}
