import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-icon-avatar',
  templateUrl: './icon-avatar.component.html',
  styleUrls: ['./icon-avatar.component.css']
})
export class IconAvatarComponent implements OnInit {

  @Input() src?: string;

  constructor() { 
      this.src="../../../assets/icon/avatar.png"
  }

  ngOnInit(): void {
    
  }

}
