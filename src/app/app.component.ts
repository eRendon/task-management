import { Component, OnInit } from '@angular/core'
import { AuthService } from './services/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (private authService: AuthService) {}
  ngOnInit (): void {
    const token = localStorage.getItem('token')
    if (token) {
      this.authService.setToken(token)
    }
  }
}
