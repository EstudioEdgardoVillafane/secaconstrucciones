import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendTextoFotoPrincipalComponent } from './backend-texto-foto-principal.component';

describe('BackendTextoFotoPrincipalComponent', () => {
  let component: BackendTextoFotoPrincipalComponent;
  let fixture: ComponentFixture<BackendTextoFotoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendTextoFotoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendTextoFotoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
