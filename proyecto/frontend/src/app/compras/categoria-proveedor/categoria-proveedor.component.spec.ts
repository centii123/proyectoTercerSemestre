import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaProveedorComponent } from './categoria-proveedor.component';

describe('CategoriaProveedorComponent', () => {
  let component: CategoriaProveedorComponent;
  let fixture: ComponentFixture<CategoriaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
