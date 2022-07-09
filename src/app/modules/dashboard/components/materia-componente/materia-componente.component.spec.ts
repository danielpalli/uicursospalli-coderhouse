import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaComponenteComponent } from './materia-componente.component';

describe('MateriaComponenteComponent', () => {
  let component: MateriaComponenteComponent;
  let fixture: ComponentFixture<MateriaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
