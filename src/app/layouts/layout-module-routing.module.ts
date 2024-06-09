import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component'
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { AuthComponent } from '../pages/auth/auth.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutModuleRoutingModule { }
