import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionClienteComponent } from './validacion-cliente.component';

describe('ValidacionClienteComponent', () => {
  let component: ValidacionClienteComponent;
  let fixture: ComponentFixture<ValidacionClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidacionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
