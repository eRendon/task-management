import { Component, EventEmitter, Output } from '@angular/core'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent {
  @Output() emitterShowSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();
  isShowSidebar: boolean = false
  constructor (private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut()
  }

  showSidebar(state: boolean): void {
    this.isShowSidebar = state
    this.emitterShowSideBar.emit(this.isShowSidebar)
  }
}
