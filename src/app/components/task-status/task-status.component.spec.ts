import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskStatusComponent } from './task-status.component';
import { ModalService } from '../../services/modal/modal.service';
import { TaskService } from '../../services/task/task.service';
import { ITask } from '../../Interfaces/ITask';
import { of } from 'rxjs';
import { TaskStatesComponent } from '../task-states/task-states.component'
import { FormsModule } from '@angular/forms'

describe('TaskStatusComponent', () => {
  let component: TaskStatusComponent;
  let fixture: ComponentFixture<TaskStatusComponent>;
  let modalService: jasmine.SpyObj<ModalService>;
  let taskService: jasmine.SpyObj<TaskService>;
  const task: ITask = { id: 1, title: 'Test Task', description: 'Test Description', dueDate: new Date(), state: 'todo' };

  beforeEach(async () => {
    const modalServiceSpy = jasmine.createSpyObj('ModalService', ['open', 'setRootViewContainerRef', 'close']);
    const taskServiceSpy = jasmine.createSpyObj('TaskService', ['changeState', 'deleteTask']);

    await TestBed.configureTestingModule({
      declarations: [ TaskStatusComponent, TaskStatesComponent ],
      imports: [FormsModule],
      providers: [
        { provide: ModalService, useValue: modalServiceSpy },
        { provide: TaskService, useValue: taskServiceSpy }
      ]
    })
    .compileComponents();

    modalService = TestBed.inject(ModalService) as jasmine.SpyObj<ModalService>;
    taskService = TestBed.inject(TaskService) as jasmine.SpyObj<TaskService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStatusComponent);
    component = fixture.componentInstance;
    component.task = task
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal when editTask is called', () => {

    // Act
    component.editTask(new MouseEvent('click'));

    // Assert
    expect(modalService.open).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Function), task);
  });

  it('should call taskService.changeState when changeStatus is called', () => {
    // Arrange
    const newState = 'in_progress';

    // Act
    component.changeStatus(newState);

    // Assert
    expect(taskService.changeState).toHaveBeenCalledWith(task.id!, newState);
  });

  it('should open confirmation modal when deleteTask is called and user confirms', () => {
    // Arrange
    const modalRefSpy = jasmine.createSpyObj('ModalRef', ['subscribe']);
    modalRefSpy.subscribe.and.returnValue(of(true));
    modalService.open.and.returnValue(modalRefSpy);

    // Act
    component.deleteTask(new MouseEvent('click'));

    // Assert
    expect(modalService.open).toHaveBeenCalledOnceWith(jasmine.any(Function), jasmine.any(Function), jasmine.any(Object));
    expect(taskService.deleteTask).not.toHaveBeenCalled();
    expect(modalService.close).not.toHaveBeenCalled();
  });
});
