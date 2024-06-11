import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {
  isShowSidebar: boolean = false
  showSideBar(event: boolean): void {
    this.isShowSidebar = event
  }
}
