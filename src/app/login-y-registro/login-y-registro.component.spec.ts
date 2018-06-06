import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginYRegistroComponent } from './login-y-registro.component';

describe('LoginYRegistroComponent', () => {
  let component: LoginYRegistroComponent;
  let fixture: ComponentFixture<LoginYRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginYRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginYRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
