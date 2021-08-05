import { Component, OnInit } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  style=STYLE

  user!: User

  constructor() {}

  ngOnInit(): void {
    var user: User = {
      'id': 1,
      'username': 'trunghung',
      'password': '123456',
      'name': 'hung',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHd4nhm7Ji3L0DMrHi3dYJ9_x0X_3zM4qkQ&usqp=CAU'
    }
    this.user=user
    console.log(this.user)
  }

}
