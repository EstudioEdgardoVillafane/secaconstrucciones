import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSubatributoComponent } from './backend-subatributo.component';

describe('BackendSubatributoComponent', () => {
  let component: BackendSubatributoComponent;
  let fixture: ComponentFixture<BackendSubatributoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendSubatributoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendSubatributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
