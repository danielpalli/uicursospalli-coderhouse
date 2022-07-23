import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  respuesta: boolean = false;

  ngOnInit(): void {
    if (this.authService.role === 'Admin') {
      this.respuesta = true;
    }
  }

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
