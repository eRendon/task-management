import { Component, Input } from '@angular/core'
import { Subject } from 'rxjs'

interface IAction {
  title: string
  message: string
}
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() data!: IAction
  @Input() responseSubject!: Subject<boolean>;

  onSelectAction(action: boolean): void {
    this.responseSubject.next(action)
  }
}
