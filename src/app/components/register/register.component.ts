import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { passwordMatchValidator } from '../../validaros/passwordMatchValidator'
import { LoadingService } from '../../services/loading/loading.service'
import { AlertService } from '../../services/alert/alert.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() onHaveAccount: EventEmitter<string> = new EventEmitter<string>();
  registerForm!: FormGroup
  constructor (private fb: FormBuilder,
               private authService: AuthService,
               private loadingService: LoadingService,
               private alertService: AlertService
  ) {}

  ngOnInit () {
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator })
  }


  async register (): Promise<void> {
    if (this.registerForm.valid) {
      this.loadingService.present()
      this.authService.register(this.registerForm.value).subscribe({
        next: value => {
          console.log(value)
          this.loadingService.close()
          this.alertService.success('Register success, please, log in')
        },
        error: err => {
          console.log(err)
          this.loadingService.close()
          this.alertService.error(err.error)
        }
      })
    }
  }

  changeToLogin(): void {
    this.onHaveAccount.emit()
  }
}
