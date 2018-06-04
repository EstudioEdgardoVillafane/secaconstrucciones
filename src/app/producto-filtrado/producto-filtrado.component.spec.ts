import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFiltradoComponent } from './producto-filtrado.component';

describe('ProductoFiltradoComponent', () => {
  let component: ProductoFiltradoComponent;
  let fixture: ComponentFixture<ProductoFiltradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoFiltradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
