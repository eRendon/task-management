import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { ITask } from '../../Interfaces/ITask'
import { LoadingService } from '../loading/loading.service'
import { ModalService } from '../modal/modal.service'
import { AlertService } from '../alert/alert.service'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>([])
  constructor(private httpService: HttpService,
              private loadingService: LoadingService,
              private modalService: ModalService,
              private alertService: AlertService
  ) { }

  getTAsks (): void {
    this.loadingService.present()
    this.httpService.get<ITask[]>('/tasks').subscribe({
      next: value => {
        console.log(value)
        this.tasks.next(value)
        this.loadingService.close()
      },
      error: err => {
        this.loadingService.close()
        console.log(err)
      }
    })
  }

  createTask(task: ITask): void {
    this.loadingService.present()
    this.httpService.post<ITask, ITask>('/tasks', task).subscribe({
      next: value => {
        console.log('create task', value)
        const tasks = this.tasks.value
        tasks.push(value)
        this.tasks.next(tasks)
        this.loadingService.close()
        this.modalService.close()
        this.alertService.success('Task created!')
      },
      error: err => {
        this.loadingService.close()
        this.alertService.error('Error when trying to create task')
        console.log('error cerate task', err)
      }
    })
  }

  updateTask(task: ITask): void {
    this.loadingService.present()
    this.httpService.put(`/tasks/${task.id}`, task).subscribe({
      next: value => {
        console.log('update task', value)
        this.loadingService.close()
        this.getTAsks()
        this.alertService.success('Task updated.')
      },
      error: err => {
        this.loadingService.close()
        this.alertService.error('Error when trying to update task')
        console.log('error updatet ask', err)
      }
    })
  }

  setTasks(tasks: ITask[]) {
    this.tasks.next(tasks)
  }

  changeState(id: number, state: string): void {
    const updatedTaskIndex = this.tasks.value.findIndex(task => task.id === id);
    if (updatedTaskIndex !== -1) {
      const updatedTask = { ...this.tasks.value[updatedTaskIndex], state };

      // Actualizar la tarea en el array local de tareas
      const tasks = [...this.tasks.value];
      tasks[updatedTaskIndex] = updatedTask;

      // Actualizar el estado local
      this.tasks.next(tasks);

      // Enviar la tarea actualizada a la API
      this.updateTask(updatedTask)
      tasks[updatedTaskIndex] = { ...this.tasks.value[updatedTaskIndex], state: this.tasks.value[updatedTaskIndex].state };
      this.tasks.next(tasks);
    }
  }

  deleteTask(id: number): void {
    this.loadingService.present()
    this.httpService.delete(`/tasks/${id}`).subscribe({
      next: value => {
        console.log(value)
        this.loadingService.close()
        this.alertService.success('Task deleted!')
      },
      error: err => {
        console.log(err)
        this.loadingService.close()
        this.alertService.error('Error when trying to delete task')
      }
    })
  }
  $getTasks(): Observable<ITask[]> {
    return this.tasks.asObservable()
  }
}
