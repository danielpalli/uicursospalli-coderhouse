import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  collapsed: boolean = true;
  respuesta: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  irAAlumnos() {
    this.router.navigate(['/autogestion/alumnos']);
  }
  irACursos() {
    this.router.navigate(['/autogestion/cursos']);
  }
  irAInscripcion() {
    this.router.navigate(['/autogestion/inscripciones']);
  }
  irAUsuarios() {
    this.router.navigate(['/autogestion/usuarios']);
  }

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
