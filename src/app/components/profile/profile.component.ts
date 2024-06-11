import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { IUser } from '../../Interfaces/IUser'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: IUser
  bio: string = 'Front end developer with more than 7 years of experience and two years as a full stakc, your best option!'
  constructor (private userService: UserService) {}

  ngOnInit (): void {
    this.getProfile()
    this.userService.$getUser().subscribe({
      next: user => {
        console.log(user)
        this.user = user!
      }
    })
  }

  getProfile(): void {
    this.userService.getProfile()
  }
}
