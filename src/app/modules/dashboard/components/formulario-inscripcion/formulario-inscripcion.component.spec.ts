import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInscripcion } from './formulario-inscripcion.component';

describe('FormularioInscripcion', () => {
  let component: FormularioInscripcion;
  let fixture: ComponentFixture<FormularioInscripcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioInscripcion ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInscripcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
