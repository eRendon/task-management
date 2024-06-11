import { Injectable } from '@angular/core';
import { IUser } from '../../Interfaces/IUser'
import { HttpService } from '../http/http.service'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private $user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  private user!: IUser
  constructor(private http: HttpService) { }

  getProfile(): void {
    if (!this.user) {
      this.http.get<IUser>('/user/get-profile').subscribe({
        next: profile => {
          console.log('profile', profile)
          this.setUser(profile)
        },
        error: err => {
          console.log('error get profile', err)
          throw err
        }
      })
    }
  }

  setUser(user: IUser): void {
    this.$user.next(user)
    this.user = user
  }

  $getUser(): Observable<IUser | null> {
    return this.$user.asObservable()
  }

  getUser(): IUser {
    return this.user
  }
}
