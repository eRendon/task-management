import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../components/login/login.component'
import { RegisterComponent } from '../../components/register/register.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { LoadingComponent } from '../../components/shared/loading/loading.component'
import { AlertComponent } from '../../components/shared/alert/alert.component'
import { ButtonComponent } from '../../components/atomic/button/button.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        LoadingComponent,
        AlertComponent,
        ButtonComponent
      ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
