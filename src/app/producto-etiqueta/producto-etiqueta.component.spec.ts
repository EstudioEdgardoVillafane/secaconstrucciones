import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEtiquetaComponent } from './producto-etiqueta.component';

describe('ProductoEtiquetaComponent', () => {
  let component: ProductoEtiquetaComponent;
  let fixture: ComponentFixture<ProductoEtiquetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoEtiquetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
