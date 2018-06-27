import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasCategoriaComponent } from './mas-categoria.component';

describe('MasCategoriaComponent', () => {
  let component: MasCategoriaComponent;
  let fixture: ComponentFixture<MasCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
