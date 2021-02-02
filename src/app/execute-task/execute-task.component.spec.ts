import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteTaskComponent } from './execute-task.component';

describe('ExecuteTaskComponent', () => {
  let component: ExecuteTaskComponent;
  let fixture: ComponentFixture<ExecuteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecuteTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
