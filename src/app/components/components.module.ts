import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    TaskComponent,
    TaskHeaderComponent,
    TaskStatusComponent,
    RegisterComponent,
    LoginComponent
  ],
  exports: [
    TaskComponent,
    TaskHeaderComponent,
    TaskStatusComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
