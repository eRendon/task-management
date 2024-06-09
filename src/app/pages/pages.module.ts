import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ComponentsModule } from '../components/components.module';
import { AuthComponent } from './auth/auth.component'

@NgModule({
  declarations: [
    DashboardComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
