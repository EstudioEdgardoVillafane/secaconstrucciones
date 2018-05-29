import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPreguntasComponent } from './backend-preguntas.component';

describe('BackendPreguntasComponent', () => {
  let component: BackendPreguntasComponent;
  let fixture: ComponentFixture<BackendPreguntasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPreguntasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
