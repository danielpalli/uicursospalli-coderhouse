import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  get usuario() {
    return this.authService.usuario;
  }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
