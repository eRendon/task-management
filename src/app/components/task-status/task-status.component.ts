import { Component, Input } from '@angular/core'
import { ITask } from '../../Interfaces/ITask'

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent {
  @Input() task!: ITask
}
