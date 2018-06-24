import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendAtributoComponent } from './backend-atributo.component';

describe('BackendAtributoComponent', () => {
  let component: BackendAtributoComponent;
  let fixture: ComponentFixture<BackendAtributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendAtributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
