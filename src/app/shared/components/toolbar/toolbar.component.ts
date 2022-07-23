import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  respuesta: boolean = false;
  titulo: string = 'Alumnos';


  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.titulo =  event.url.split('/')[2];
        if (this.titulo === 'alumnos') {
          this.titulo = 'Alumnos';
        }
        if (this.titulo === 'cursos') {
          this.titulo = 'Cursos';
        }
        if (this.titulo === 'inscripciones') {
          this.titulo = 'Inscripciones';
        }
        if (this.titulo === 'usuarios') {
          this.titulo = 'Usuarios';
        }
      }
    });
  }

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
