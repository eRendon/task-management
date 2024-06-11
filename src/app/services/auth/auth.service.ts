import { Injectable } from '@angular/core';
import { IRegister } from '../../Interfaces/IRegister'
import { HttpService } from '../http/http.service'
import { Observable } from 'rxjs'
import { IUser } from '../../Interfaces/IUser'
import { ILogin } from '../../Interfaces/ILogin'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: string | null
  constructor(private http: HttpService, private router: Router) { }

  register(registerForm: IRegister): Observable<IUser> {
    return this.http.post('/auth/register', registerForm)
  }

  login(loginForm: ILogin): Observable<{token: string}> {
    return this.http.post<{token: string}, ILogin>('/auth/login', loginForm)
  }

  async logOut (): Promise<void> {
    localStorage.removeItem('token')
    this.setToken(null)
    await this.router.navigateByUrl('/')
  }

  setToken(token: string | null): void {
    this.token = token
  }

  getToken(): string {
    return this.token!
  }
}
