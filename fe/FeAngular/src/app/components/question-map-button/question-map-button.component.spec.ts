import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMapButtonComponent } from './question-map-button.component';

describe('QuestionMapButtonComponent', () => {
  let component: QuestionMapButtonComponent;
  let fixture: ComponentFixture<QuestionMapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMapButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
