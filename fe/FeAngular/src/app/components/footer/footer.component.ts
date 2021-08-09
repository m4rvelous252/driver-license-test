import { Component, OnInit } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  style=this.ui.getStyleMode()

  constructor(private ui : UiService) { }

  ngOnInit(): void {
  }

}
