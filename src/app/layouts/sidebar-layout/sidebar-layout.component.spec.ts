import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLayoutComponent } from './sidebar-layout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('SidebarLayoutComponent', () => {
  let component: SidebarLayoutComponent;
  let fixture: ComponentFixture<SidebarLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLayoutComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(SidebarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
