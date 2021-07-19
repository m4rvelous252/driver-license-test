import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../vendors/bootstrap-4.6.0-dist/css/bootstrap.min.css','./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!: string
  password!: string
  repassword!: string

  message?:string

  user?: User;

  forgotUsername?:string
  forgotPassword?:string
  forgotRepassword?:string

  constructor(private userService: UserService,private router : Router) { 
  }


  ngOnInit(): void {

  }

  onSubmit(){
    if(this.username==null||this.username.length<=0){
      this.forgotUsername="Không được bỏ trống Username";
      return;
    }
    this.forgotUsername = undefined;

    if(this.password==null||this.username.length<=0){
      this.forgotPassword="Không được bỏ trống Password";
      return;
    }
    this.forgotPassword = undefined;

    if(this.repassword==null||this.username.length<=0){
      this.forgotRepassword="Không được bỏ trống Repassword";
      return;
    }
    this.forgotRepassword = undefined;

    if(this.password!==this.repassword){
      this.message="Mật khẩu xác nhận không khớp!"
      return;
    }
    this.user = {username: this.username, password: this.password};
    this.userService.getUserByUsername(this.user).subscribe(
      (user) => {
        console.log(user)
        if(user){
          this.message='Tài khoản đã tồn tại'
        }else{
          this.userService.registerUser(this.user).subscribe(
            (user)=>{
              if(user){
                this.router.navigate(['login'])
              }else{
                this.message="Đăng ký thất bại"
              }
            }
          )
        }
        
      }
    )
  }

}
