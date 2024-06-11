import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';
import { UserService } from '../../services/user/user.service';
import { TaskDetailComponent } from './task-detail.component';
import { TaskStatesComponent } from '../task-states/task-states.component';
import { IUser } from '../../Interfaces/IUser'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ButtonComponent } from '../atomic/button/button.component'


class MockUserService {
  private user: IUser | undefined;

  // Método para establecer el usuario simulado
  setUser(user: IUser) {
    this.user = user;
  }

  // Método simulado para obtener el usuario
  getUser(): IUser | undefined {
    return this.user;
  }
}

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let userService: UserService;
  let taskService: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskDetailComponent, TaskStatesComponent, ButtonComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        UserService,
        TaskService,
        { provide: UserService, useClass: MockUserService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    taskService = TestBed.inject(TaskService);
    const mockUser: IUser = {
      id: 'asdads',
      emailConfirmed: false,
      userName: 'Edwin Rendon',
      email: 'erendoncc@gmail.com',
      phoneNumberConfirmed: false,
      phoneNumber: '123456'
    };
    userService.setUser(mockUser)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize taskForm when ngOnInit is called', () => {
    // Arrange
    const expectedUser: IUser = {
      id: 'asdasdasd',
      userName: 'Edwin',
      email: 'eredoncc@gmail.com',
      emailConfirmed: false,
      phoneNumber: '123456',
      phoneNumberConfirmed: true

    }; // Provide a mock user
    spyOn(userService, 'getUser').and.returnValue(expectedUser);

    // Act
    component.ngOnInit();

    // Assert
    expect(component.taskForm).toBeDefined();
    expect(component.taskForm.get('title')).toBeDefined();
    expect(component.taskForm.get('description')).toBeDefined();
    expect(component.taskForm.get('dueDate')).toBeDefined();
    expect(component.taskForm.get('isComplete')).toBeDefined();
    expect(component.taskForm.get('userId')?.value).toEqual(expectedUser.id);
    expect(component.taskForm.get('state')?.value).toEqual('todo');
  });

  it('should call taskService.createTask when createTask is called and form is valid', () => {
    // Arrange
    spyOn(taskService, 'createTask');

    // Set form validity
    component.taskForm.setValue({
      title: 'Test Title',
      description: 'Test Description',
      dueDate: '2024-06-15', // Sample due date
      isComplete: false,
      userId: 1,
      state: 'todo'
    });

    // Act
    component.createTask();

    // Assert
    expect(taskService.createTask).toHaveBeenCalledWith(component.taskForm.value);
  });
});
