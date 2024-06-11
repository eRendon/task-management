import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordMatchValidator } from '../../validaros/passwordMatchValidator'
import { AuthService } from '../../services/auth/auth.service'
import { LoadingService } from '../../services/loading/loading.service'
import { Router } from '@angular/router'
import { AlertService } from '../../services/alert/alert.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  constructor (private fb: FormBuilder,
               private authService: AuthService,
               private loadingService: LoadingService,
               private alertService: AlertService,
               private router: Router
  ) {}

  ngOnInit (): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator })
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loadingService.present()
      this.authService.login(this.loginForm.value).subscribe({
        next: async value => {
          console.log('toeken', value)
          localStorage.setItem('token', value.token)
          this.authService.setToken(value.token)
          await this.router.navigate(['/dashboard'])
          this.loadingService.close()
        },
        error: err => {
          console.log(err)
          this.loadingService.close()
          this.alertService.error(err.error)
        }
      })
    }
  }
}
