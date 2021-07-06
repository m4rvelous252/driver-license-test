import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionMapComponent } from './components/question-map/question-map.component';
import { TimerComponent } from './components/timer/timer.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionMapButtonComponent } from './components/question-map-button/question-map-button.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { TestComponent } from './components/test/test.component';
import { AnswerButtonComponent } from './components/answer-button/answer-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
    QuestionMapComponent,
    TimerComponent,
    ButtonComponent,
    FooterComponent,
    QuestionMapButtonComponent,
    QuestionItemComponent,
    TestComponent,
    AnswerButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
