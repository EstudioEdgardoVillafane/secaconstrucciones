import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendProductsComponent } from './backend-products.component';

describe('BackendProductsComponent', () => {
  let component: BackendProductsComponent;
  let fixture: ComponentFixture<BackendProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
