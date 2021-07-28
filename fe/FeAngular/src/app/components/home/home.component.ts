import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  background_top?: string;
  textColorOnBackGround? :string;
  user?: User
  colorButton?:string
  textColorButton?:string

  constructor(private ui : UiService) { }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;

    let style = this.ui.getStyleMode()
    this.background_top = style.background_top;
    this.textColorOnBackGround = style.textColorOnBackGround;
    this.colorButton = style.colorButton;
    this.textColorButton = style.textColorButton;
  }

}
