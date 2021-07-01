import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AboutComponent } from './components/about/about.component';
import { TypesComponent } from './components/types/types.component';
import { TypeItemComponent } from './components/type-item/type-item.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionsItemComponent } from './components/questions-item/questions-item.component';
import { AnswerItemComponent } from './components/answer-item/answer-item.component';
import { AnswersComponent } from './components/answers/answers.component';

const appRountes: Routes=[
  {path:'type',component: TypesComponent},
  {path:'question',component: QuestionsComponent},
  {path: 'about',component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    AboutComponent,
    TypesComponent,
    TypeItemComponent,
    QuestionsComponent,
    QuestionsItemComponent,
    AnswerItemComponent,
    AnswersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRountes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
