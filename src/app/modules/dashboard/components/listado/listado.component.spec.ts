import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listado } from './listado.component';

describe('Listado', () => {
  let component: Listado;
  let fixture: ComponentFixture<Listado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Listado ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Listado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
