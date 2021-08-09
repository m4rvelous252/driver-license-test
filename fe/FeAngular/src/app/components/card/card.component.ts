import { Component, OnInit, Input } from '@angular/core';
import { PATHS, STYLE } from 'src/app/model/constants';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit { 
  @Input()img?: String
  @Input()text?: String
  @Input()link?: String
  @Input()icon?: String
  test = 'fas fa-plus'

  paths=PATHS
  style=this.ui.getStyleMode()

  constructor(private ui: UiService) { }

  ngOnInit(): void {
  }

}
