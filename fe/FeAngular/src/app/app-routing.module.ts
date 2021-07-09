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
import { QuestionComponent } from './components/question/question.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes=[
  {path:'',component: HomeComponent},

  {path: 'login',component: LoginComponent,canActivate:[NotAuthenticationService]},
  {path: 'register',component: RegisterComponent,canActivate:[NotAuthenticationService]},

  {path: 'about',component: AboutComponent,canActivate:[AuthenticationService]},
  
  {path:'test',component: TestComponent},

  {path:'type',component: TypesComponent},
  {path:'type/1',component: TypeItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
