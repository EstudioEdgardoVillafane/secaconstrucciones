import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendClienteComponent } from './backend-cliente.component';

describe('BackendClienteComponent', () => {
  let component: BackendClienteComponent;
  let fixture: ComponentFixture<BackendClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
