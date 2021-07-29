import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { STYLE } from './model/constants';
import { UiService } from './services/Ui/ui.service';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FeAngular';
  style = STYLE
  subscription?: Subscription

  public backGroundImg ?: string;
  public backGroundColor ?: string;

  constructor(private uiService: UiService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.uiService.getBackGroundImg().subscribe((value)=>(this.backGroundImg=value))
    this.uiService.getBackGroundColor().subscribe((value)=>(this.backGroundColor=value))
    this.backGroundColor = this.uiService.backGroundColor;
    this.backGroundImg = this.uiService.backGroundImg;
    this.cdref.detectChanges();
  }
}
