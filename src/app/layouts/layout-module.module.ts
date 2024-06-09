import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component'

@NgModule({
  declarations: [
    HeaderLayoutComponent,
    HomeLayoutComponent,
    SidebarLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule,
  ]
})
export class LayoutModuleModule { }
