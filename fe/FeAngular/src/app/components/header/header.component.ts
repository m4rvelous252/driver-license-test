import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Type } from 'src/app/model/type';
<<<<<<< HEAD
import { User } from 'src/app/model/user';
=======
import { User } from 'src/app/model/User';
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
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
