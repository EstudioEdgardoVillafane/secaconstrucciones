import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSeccionComponent } from './backend-seccion.component';

describe('BackendSeccionComponent', () => {
  let component: BackendSeccionComponent;
  let fixture: ComponentFixture<BackendSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
