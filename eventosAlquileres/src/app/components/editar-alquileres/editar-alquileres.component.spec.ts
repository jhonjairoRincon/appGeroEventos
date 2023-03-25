import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlquileresComponent } from './editar-alquileres.component';

describe('EditarAlquileresComponent', () => {
  let component: EditarAlquileresComponent;
  let fixture: ComponentFixture<EditarAlquileresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlquileresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAlquileresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
