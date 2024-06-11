import { AfterViewInit, Component, Input, ViewContainerRef } from '@angular/core'
import { ITask } from '../../Interfaces/ITask'
import { ModalService } from '../../services/modal/modal.service'
import { ModalComponent } from '../shared/modal/modal.component'
import { TaskDetailComponent } from '../task-detail/task-detail.component'
import { TaskService } from '../../services/task/task.service'
import { ActionComponent } from '../shared/action/action.component'

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements AfterViewInit{
  @Input() task!: ITask

  constructor (private modalService: ModalService,
               private viewContainerRef: ViewContainerRef,
               private taskService: TaskService
  ) {}


  ngAfterViewInit (): void {
    this.modalService.setRootViewContainerRef(this.viewContainerRef)
  }

  editTask (event: MouseEvent): void {
    event.preventDefault()
    this.modalService.open(ModalComponent, TaskDetailComponent, this.task)
  }

  changeStatus(event: string): void {
    this.taskService.changeState(this.task.id!, event)
  }

  deleteTask(event: MouseEvent): void {
    event.stopPropagation()
    const modalRef = this.modalService.open(ModalComponent, ActionComponent,
      { title: 'Delete task', message: 'Are you sure to delete this task?' })
    modalRef.subscribe(response => {
      console.log(response)
      if (response) {
        console.log(response)
        this.taskService.deleteTask(this.task.id!)
      }
      this.modalService.close()
    })
  }
}
