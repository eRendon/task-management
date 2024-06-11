import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';
import { ButtonComponent } from '../../atomic/button/button.component'
import { Subject } from 'rxjs'

interface IAction {
  title: string
  message: string
}

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionComponent, ButtonComponent]
    });
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;

    component.data = {
      title: 'Test Title',
      message: 'Test Message'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit false when "No" button is clicked', () => {
    const responseSubject = new Subject<boolean>();
    component.responseSubject = responseSubject;

    const action: IAction = {
      title: 'Test Title',
      message: 'Test Message'
    };
    component.data = action;

    fixture.detectChanges();

    // Creamos un objeto espía para el método next del Subject
    const nextSpy = spyOn(responseSubject, 'next');

    // Simulamos hacer click en el botón "No"
    component.onSelectAction(false);

    // Comprobamos si se llamó a next con el valor esperado
    expect(nextSpy).toHaveBeenCalledWith(false);
  });

  it('should emit true when "Yes" button is clicked', () => {
    // Configurar el subject de respuesta
    const responseSubject = new Subject<boolean>();
    component.responseSubject = responseSubject;

    // Configurar datos de acción
    const action: IAction = {
      title: 'Test Title',
      message: 'Test Message'
    };
    component.data = action;

    // Detectar cambios en el fixture
    fixture.detectChanges();

    // Espiar el método next del subject
    const spy = spyOn(responseSubject, 'next');

    // Seleccionar y hacer clic en el botón "Yes" por su contenido
    const yesButton = fixture.nativeElement.querySelector('app-button[label="Yes"]');
    yesButton.click(); // <-- Aquí es donde se produce el error

    // Verificar si next fue llamado con true
    expect(spy).toHaveBeenCalledWith(true);
  });
});
