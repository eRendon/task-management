import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core'
import { TaskService } from '../../services/task/task.service'
import { UserService } from '../../services/user/user.service'
import { ModalService } from '../../services/modal/modal.service'
import { ModalComponent } from '../../components/shared/modal/modal.component'
import { TaskDetailComponent } from '../../components/task-detail/task-detail.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor (private taskService: TaskService,
               private userService: UserService,
               private modalService: ModalService,
               private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit () {
    this.userService.getProfile()
    this.taskService.getTAsks()
  }

  ngAfterViewInit (): void {
    this.modalService.setRootViewContainerRef(this.viewContainerRef)
  }

  createTask() {
    this.modalService.open(ModalComponent, TaskDetailComponent)
  }
}
