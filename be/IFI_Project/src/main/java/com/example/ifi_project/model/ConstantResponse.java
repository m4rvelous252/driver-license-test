package com.example.ifi_project.model;

public final class ConstantResponse {
    public static final int codeSuccess = 0;
    public static final String messegeSuccess ="Thành công";

    public static final int codeNotFount = 1;
    public static final String messegeNotFount ="Không tìm thấy";

    public static final int codeEmpty = 2;
    public static final String messegeEmpty ="Trống";

    public static final int codeSaveSuc = 3;
    public static final String messegeSaveSuc ="Ghi thành công";

    public static final int codeSaveFail = 4;
    public static final String messegeSaveFail ="Ghi thất bại";

    public static final int codeLoginSuc = 5;
    public static final String messegeLoginSuc ="Đăng nhập thành công";

    public static final int codeLoginFail = 6;
    public static final String messegeLoginFail ="Sai tài khoản hoặc mật khẩu";

    public static Response responseNotFount(Response response){
        response.code = codeNotFount;
        response.message = messegeNotFount;
        response.status = false;
        return response;
    }

    public static Response responseSuccess(Response response){
        response.code = codeSuccess;
        response.message = messegeSuccess;
        response.status = true;
        return response;
    }

    public static Response responseEmpty(Response response){
        response.code = codeEmpty;
        response.message = messegeEmpty;
        response.status = true;
        return response;
    }

    public static Response responseSaveSuc(Response response){
        response.code = codeSaveSuc;
        response.message = messegeSaveSuc;
        response.status = true;
        return response;
    }

    public static Response responseSaveFail(Response response){
        response.code = codeSaveFail;
        response.message = messegeSaveFail;
        response.status = false;
        return response;
    }

    public static Response responseLoginSuc(Response response){
        response.code = codeLoginSuc;
        response.message = messegeLoginSuc;
        response.status = true;
        return response;
    }

    public static Response responseLoginFail(Response response){
        response.code = codeLoginFail;
        response.message = messegeLoginFail;
        response.status = false;
        return response;
    }

	public static int getCodesuccess() {
		return codeSuccess;
	}

	public static String getMessegesuccess() {
		return messegeSuccess;
	}

	public static int getCodenotfount() {
		return codeNotFount;
	}

	public static String getMessegenotfount() {
		return messegeNotFount;
	}

	public static int getCodeempty() {
		return codeEmpty;
	}

	public static String getMessegeempty() {
		return messegeEmpty;
	}

	public static int getCodesavesuc() {
		return codeSaveSuc;
	}

	public static String getMessegesavesuc() {
		return messegeSaveSuc;
	}

	public static int getCodesavefail() {
		return codeSaveFail;
	}

	public static String getMessegesavefail() {
		return messegeSaveFail;
	}

	public static int getCodeloginsuc() {
		return codeLoginSuc;
	}

	public static String getMessegeloginsuc() {
		return messegeLoginSuc;
	}

	public static int getCodeloginfail() {
		return codeLoginFail;
	}

	public static String getMessegeloginfail() {
		return messegeLoginFail;
	}
    
    
}
