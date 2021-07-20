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
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordTestComponent } from './components/record-test/record-test.component';
import { RecordTestItemComponent } from './components/record-test-item/record-test-item.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
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
    CategoryItemComponent,
    QuizComponent,
    ResultComponent,
    RecordTestComponent,
    TypesComponent,
    TypeItemComponent,
    RecordTestItemComponent,
    QuizCardComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    CountdownModule, MdbCarouselModule, MdbCheckboxModule, MdbCollapseModule, MdbDropdownModule, MdbFormsModule, MdbModalModule, MdbPopoverModule, MdbRadioModule, MdbRangeModule, MdbRippleModule, MdbScrollspyModule, MdbTabsModule, MdbTooltipModule, MdbValidationModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
