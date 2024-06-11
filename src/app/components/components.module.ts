import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './atomic/button/button.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/loading/loading.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ActionComponent } from './shared/action/action.component';
import { TaskStatesComponent } from './task-states/task-states.component';
import { AlertComponent } from './shared/alert/alert.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    TaskComponent,
    TaskHeaderComponent,
    TaskStatusComponent,
    RegisterComponent,
    LoginComponent,
    ButtonComponent,
    LoadingComponent,
    TaskDetailComponent,
    ModalComponent,
    ActionComponent,
    TaskStatesComponent,
    AlertComponent,
    ProfileComponent
  ],
  exports: [
    TaskComponent,
    TaskHeaderComponent,
    TaskStatusComponent,
    LoginComponent,
    LoadingComponent,
    RegisterComponent,
    LoadingComponent,
    ButtonComponent,
    AlertComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
