import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{UserService} from '../../services/user/user.service'
import{User} from '../../model/user'
import { DateTime } from 'luxon';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../vendors/bootstrap-4.6.0-dist/css/bootstrap.min.css','./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string
  password!: string
  save?:boolean

  message?:string

  user?: User;

  forgotUsername?:string
  forgotPassword?:string

  backGroundImg = "/assets/img/BG_Quiz.jpg"

  constructor(
    private userService: UserService,
    private router : Router,
    private uiService: UiService) {
  }

  ngOnInit(): void {
    this.uiService.setBackGroundImg(this.backGroundImg);
    this.save = false;
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
      (response) => {
        if(response.status){
          this.user = response.data;
          this.user!.save = this.save
          this.user!.logintime = DateTime.now().toISO();
          localStorage.setItem('user', JSON.stringify(this.user));
          window.location.replace('')
        }else{

        }
      }
    )
  }

  checkboxevent(){
    console.log(this.save)
  }

}
