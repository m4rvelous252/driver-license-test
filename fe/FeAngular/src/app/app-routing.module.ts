import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { LoginComponent} from './components/login/login.component'
import { RegisterComponent} from './components/register/register.component'
import { HomeComponent} from './components/home/home.component'
import {AuthenticationService} from './services/authentication/authentication.service'
import {NotAuthenticationService} from './services/authentication/not-authentication.service'

const routes: Routes=[
  {path:'',component: HomeComponent},

  {path: 'login',component: LoginComponent,canActivate:[NotAuthenticationService]},
  {path: 'register',component: RegisterComponent,canActivate:[NotAuthenticationService]},

  {path: 'about',component: AboutComponent,canActivate:[AuthenticationService]},
  
  {path:'type',component: TypesComponent},
  {path:'question',component: QuestionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
