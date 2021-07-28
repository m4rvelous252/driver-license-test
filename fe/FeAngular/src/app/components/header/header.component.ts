import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KEY, STYLE } from 'src/app/model/constants';
import { Type } from 'src/app/model/type';
import { User } from 'src/app/model/user';
import { UiService } from 'src/app/services/Ui/ui.service';
import{UserService} from '../../services/user/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  style=STYLE

  type?: Type

  user?: User

  subscription!: Subscription;

  imgMode!: string

  constructor(private userService: UserService, private ui : UiService) {

  }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;
    let style = this.ui.getStyleMode();
    this.imgMode = style.imgDirection;
    console.log(this.user)
  }

  Logout(){
    localStorage.clear();
  }

  changeMode(){
    if(localStorage.getItem(KEY.LightMode)){
      localStorage.removeItem(KEY.LightMode);
    }else{
      localStorage.setItem(KEY.LightMode,KEY.LightMode);
    }
    window.location.reload();
  }

}
