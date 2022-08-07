import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoCursoComponent } from './formulario-nuevo-curso.component';

describe('FormularioNuevoCursoComponent', () => {
  let component: FormularioNuevoCursoComponent;
  let fixture: ComponentFixture<FormularioNuevoCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
