import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeAddQuizComponent } from './card-type-add-quiz.component';

describe('CardTypeAddQuizComponent', () => {
  let component: CardTypeAddQuizComponent;
  let fixture: ComponentFixture<CardTypeAddQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeAddQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeAddQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
