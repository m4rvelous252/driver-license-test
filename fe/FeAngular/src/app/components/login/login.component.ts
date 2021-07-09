import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{UserService} from '../../services/user/user.service'
import{User} from '../../model/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../vendors/bootstrap-4.6.0-dist/css/bootstrap.min.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string
  password!: string

  message?:string

  user?: User;

  forgotUsername?:string
  forgotPassword?:string

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

    this.user = {username: this.username, password: this.password};
    this.userService.login(this.user).subscribe(
      (user) => {
        if(user){
          if(user.password==this.password){
            localStorage.setItem('user', JSON.stringify(user));
            window.location.replace('')
          }else{
            this.message='Sai mật khẩu'
          }
          
        }else{
          this.message='Tài khoản không tồn tại'
          //this.router.navigate(['login']);
        }
        
      }
    )
  }

}
