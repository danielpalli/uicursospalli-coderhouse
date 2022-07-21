import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { HttpClientModule } from '@angular/common/http';
import { MockModule, MockService } from 'ng-mocks';

fdescribe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  const mockResp: Usuario[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(HttpClientModule), HttpClientTestingModule],
      providers: [],
    }).compileComponents();
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Peticion de usuarios', () => {
    service.obternerUsuarios().subscribe((data) => {
      expect(data).toEqual(mockResp);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: 'http://localhost:4000/api/usuarios',
    });
    req.flush(mockResp);
  });
});
