import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLazzarComponent } from './login-lazzar.component';

describe('LoginLazzarComponent', () => {
  let component: LoginLazzarComponent;
  let fixture: ComponentFixture<LoginLazzarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLazzarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLazzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
