import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPreguntasEditComponent } from './backend-preguntas-edit.component';

describe('BackendPreguntasEditComponent', () => {
  let component: BackendPreguntasEditComponent;
  let fixture: ComponentFixture<BackendPreguntasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPreguntasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPreguntasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
