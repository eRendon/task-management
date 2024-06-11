import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = 'Guardar'
  @Input() isDisabled: boolean = false
  @Input() type: 'submit' | 'button' | 'reset' = 'button'
  @Input() styles!: string
}
