import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TaskService } from '../../services/task/task.service'
import { UserService } from '../../services/user/user.service'
import { ITask } from '../../Interfaces/ITask'

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskForm!: FormGroup
  @Input() data!: ITask
  constructor (private fb: FormBuilder,
               private userService: UserService,
               private taskService: TaskService
  ) {}

  ngOnInit (): void {
    const user = this.userService.getUser()
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dueDate: [new Date, [Validators.required]],
      isComplete: [false],
      userId: user.id,
      state: ['todo']
    })

    if (this.data) {
      const formattedDate = new Date(this.data.dueDate!).toISOString().split('T')[0];
      this.taskForm.patchValue(this.data)
      this.taskForm.get('dueDate')?.setValue(formattedDate)
      this.taskForm.addControl('id', this.fb.control(this.data.id))
    }
  }

  createTask(): void {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value)
    } else {
      this.taskForm.markAllAsTouched()
    }
  }

  verifyAction(): void {
    if (this.data) {
      this.updateTask()
    } else {
      this.createTask()
    }
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskForm.value)
  }

  changeState(state:string): void {
    this.taskForm.get('state')?.setValue(state)
  }
}
