import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayoutComponent } from './header-layout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ButtonComponent } from '../../components/atomic/button/button.component'

describe('HeaderLayoutComponent', () => {
  let component: HeaderLayoutComponent;
  let fixture: ComponentFixture<HeaderLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLayoutComponent,ButtonComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(HeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
