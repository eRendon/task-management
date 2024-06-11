import { Component, Input } from '@angular/core'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {
  @Input() showSideBar: boolean = false
  constructor (private authService: AuthService) {}

  logOut(): void {
    this.authService.logOut()
  }
}
