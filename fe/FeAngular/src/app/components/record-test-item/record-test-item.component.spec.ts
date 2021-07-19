import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordTestItemComponent } from './record-test-item.component';

describe('RecordTestItemComponent', () => {
  let component: RecordTestItemComponent;
  let fixture: ComponentFixture<RecordTestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordTestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordTestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
