import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandodComponent } from './probandod.component';

describe('ProbandodComponent', () => {
  let component: ProbandodComponent;
  let fixture: ComponentFixture<ProbandodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbandodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbandodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
