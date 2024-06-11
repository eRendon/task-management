import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core'
import { ITask } from '../../Interfaces/ITask'
import { TaskService } from '../../services/task/task.service'
import { ModalService } from '../../services/modal/modal.service'
import { TaskDetailComponent } from '../task-detail/task-detail.component'
import { ModalComponent } from '../shared/modal/modal.component'
import { taskStates } from '../../const/taskStates'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {
  tasks: ITask[] = []

  tasksByState: { [key: string]: ITask[] } = {
    'todo': [],
    'in-progress': [],
    'done': []
  }

  taskStatus = taskStates

  constructor (private taskService: TaskService,
               private modalService: ModalService,
               private viewContainerRef: ViewContainerRef
  ) {}
  ngOnInit (): void {
    this.taskService.$getTasks().subscribe({
      next: tasks => {
        this.tasks = tasks
        console.log(tasks)
        this.organizeTasksByState()
      }
    })
  }

  ngAfterViewInit (): void {
    this.modalService.setRootViewContainerRef(this.viewContainerRef)
  }

  organizeTasksByState(): void {
    const tasksByState: { [key: string]: ITask[] } = {
      'todo': [],
      'in-progress': [],
      'done': []
    };

    this.tasks.forEach(task => {
      if (!tasksByState[task.state!]) {
        tasksByState[task.state!] = [];
      }
      if (!tasksByState[task.state!].some(t => t.id === task.id)) {
        tasksByState[task.state!].push(task);
      }
    });
    console.log(tasksByState)
    this.tasksByState = tasksByState
  }

  createTask(): void {
    this.modalService.open(ModalComponent,TaskDetailComponent)
  }
}
