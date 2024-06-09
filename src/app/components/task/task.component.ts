import { Component, Input, OnInit } from '@angular/core'
import { ITask } from '../../Interfaces/ITask'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  // @Input() tasks!: ITask[]
  tasks: ITask[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', state: 'todo' },
    { id: 2, title: 'Task 2', description: 'Description 2', state: 'in-progress' },
    { id: 3, title: 'Task 3', description: 'Description 3', state: 'done' },
    // more tasks
  ];

  tasksByState: { [key: string]: ITask[] } = {
    'todo': [],
    'in-progress': [],
    'done': []
  }

  taskStatus = ['todo', 'in-progress', 'done']
  ngOnInit () {
    this.organizeTasksByState()
  }

  organizeTasksByState(): void {
    this.tasks.forEach(task => {
      if (!this.tasksByState[task.state!]) {
        this.tasksByState[task.state!] = [];
      }
      this.tasksByState[task.state!].push(task);
    });
  }
}
