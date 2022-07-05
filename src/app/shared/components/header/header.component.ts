import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
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

  constructor(private authService: AuthService, private router: Router) {}
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
  });

  ngOnInit(): void {}

  logout() {
    this.router.navigateByUrl('/auth/login');
    this.authService.logout();
  }
}
