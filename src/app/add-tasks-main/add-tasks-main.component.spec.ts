import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksMainComponent } from './add-tasks-main.component';

describe('AddTasksMainComponent', () => {
  let component: AddTasksMainComponent;
  let fixture: ComponentFixture<AddTasksMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTasksMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
