import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TypesComponent } from './components/types/types.component';
import { TypeItemComponent } from './components/type-item/type-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { IconAvatarComponent } from './components/icon-avatar/icon-avatar.component';
import { AnswerButtonComponent } from './components/answer-button/answer-button.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { QuestionMapComponent } from './components/question-map/question-map.component';
import { QuestionMapButtonComponent } from './components/question-map-button/question-map-button.component';
import { TestComponent } from './components/test/test.component';
import { TimerComponent } from './components/timer/timer.component';
import { ButtonComponent } from './components/button/button.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    TypesComponent,
    TypeItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    IconAvatarComponent,
    AnswerButtonComponent,
    QuestionComponent,
    QuestionMapComponent,
    QuestionMapButtonComponent,
    TestComponent,
    TimerComponent,
    QuestionItemComponent,
    ButtonComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
