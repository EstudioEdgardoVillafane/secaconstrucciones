import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFrontComponent } from './registro-front.component';

describe('RegistroFrontComponent', () => {
  let component: RegistroFrontComponent;
  let fixture: ComponentFixture<RegistroFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
