import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutComponent } from './home-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component'
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { LoadingComponent } from '../../components/shared/loading/loading.component'
import { AlertComponent } from '../../components/shared/alert/alert.component'
import { ButtonComponent } from '../../components/atomic/button/button.component'

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeLayoutComponent,
        HeaderLayoutComponent,
        SidebarLayoutComponent,
        LoadingComponent,
        AlertComponent,
        ButtonComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
