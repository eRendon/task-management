import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { taskStates } from '../../const/taskStates'

@Component({
  selector: 'app-task-states',
  templateUrl: './task-states.component.html',
  styleUrls: ['./task-states.component.scss']
})
export class TaskStatesComponent implements OnInit {
  @Output() onSelectState: EventEmitter<string> = new EventEmitter<string>();
  @Input() state!: string
  selectedState!: string
  taskStatus = taskStates

  ngOnInit (): void {
    this.selectedState = this.state
  }

  stopPropagation (event: MouseEvent): void {
    event.stopPropagation()
  }

  selectState(): void {
    this.onSelectState.emit(this.selectedState)
  }
}
