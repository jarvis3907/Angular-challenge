import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksSummaryComponent } from './add-tasks-summary.component';

describe('AddTasksSummaryComponent', () => {
  let component: AddTasksSummaryComponent;
  let fixture: ComponentFixture<AddTasksSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
