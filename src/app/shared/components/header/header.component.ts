import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }

}
