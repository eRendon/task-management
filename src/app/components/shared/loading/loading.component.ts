import { Component, OnInit } from '@angular/core'
import { LoadingService } from '../../../services/loading/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false

  constructor (private loadingService: LoadingService) {}

  ngOnInit (): void {
    this.loadingService.getLoading().subscribe(payload => {
      this.isLoading = payload
    })
  }
}
