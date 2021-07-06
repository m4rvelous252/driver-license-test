import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Type } from 'src/app/model/Type';
import { User } from 'src/app/model/User';
import{UserService} from '../../services/user/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  type?: Type
  
  user?: User

  subscription!: Subscription;

  constructor(private userService: UserService) {
  
  }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;
    console.log(this.user)
  }

  Logout(){
    localStorage.clear();
  }

}
