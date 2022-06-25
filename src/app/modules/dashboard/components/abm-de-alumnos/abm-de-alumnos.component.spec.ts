import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmDeAlumnosComponent } from './abm-de-alumnos.component';

describe('AbmDeAlumnosComponent', () => {
  let component: AbmDeAlumnosComponent;
  let fixture: ComponentFixture<AbmDeAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmDeAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmDeAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
