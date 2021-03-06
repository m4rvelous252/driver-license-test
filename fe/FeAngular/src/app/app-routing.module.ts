import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { TypesComponent } from './components/types/types.component';
import { TypeItemComponent } from './components/type-item/type-item.component';
import { LoginComponent} from './components/login/login.component'
import { RegisterComponent} from './components/register/register.component'
import { HomeComponent} from './components/home/home.component'
import {AuthenticationService} from './services/authentication/authentication.service'
import {NotAuthenticationService} from './services/authentication/not-authentication.service'
import {DurationAuthService} from './services/duration-auth/duration-auth.service'
import { QuestionComponent } from './components/question/question.component';
import { TestComponent } from './components/test/test.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryComponent } from './components/category/category.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { RecordTestComponent } from './components/record-test/record-test.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { QuizEditComponent } from './components/quiz-edit/quiz-edit.component';

const routes: Routes=[
  {path:'',component: HomeComponent},

  {path: 'login',component: LoginComponent,canActivate:[NotAuthenticationService]},
  {path: 'register',component: RegisterComponent,canActivate:[NotAuthenticationService]},

  {path: 'about',component: AboutComponent,canActivate:[DurationAuthService,AuthenticationService]},

  {path:'test',component: TestComponent},

  {path:'type',component: TypesComponent},

  {path:'type/:id_type',component: TypeItemComponent},

  {path:'category/:id_category',component: CategoryItemComponent},

  {path:'category',component: CategoryComponent},

  {path:'quiz/:id_quiz',component: QuizComponent},

  {path:'quiz/:id_quiz/edit',component: QuizEditComponent},

  {path:'result',component: ResultComponent},

  {path:'recordTest',component: RecordTestComponent,canActivate:[DurationAuthService]},

  {path:'category/:id_category/add-type',component: AddTypeComponent},

  {path:'category/:id_category/add-quiz',component: AddQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
