import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  respuesta: boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }
  }

}
