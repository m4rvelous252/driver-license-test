import { Component, OnInit, Input } from '@angular/core';
import { PATHS, STYLE } from 'src/app/model/constants';
import { type } from 'src/app/model/type';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.css']
})
export class CardTypeComponent implements OnInit {

  style=this.ui.getStyleMode()

  paths=PATHS

  @Input() type! : type

  constructor(private ui: UiService) { }

  ngOnInit(): void {
  }

}
