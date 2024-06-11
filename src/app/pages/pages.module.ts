import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ComponentsModule } from '../components/components.module';
import { AuthComponent } from './auth/auth.component'
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component'

@NgModule({
  declarations: [
    DashboardComponent,
    AuthComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
