import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatesComponent } from './task-states.component';
import { FormsModule } from '@angular/forms'

describe('TaskStatesComponent', () => {
  let component: TaskStatesComponent;
  let fixture: ComponentFixture<TaskStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskStatesComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(TaskStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
