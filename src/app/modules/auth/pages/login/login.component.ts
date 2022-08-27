import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  btnColour = '#a54f4f';

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  validarCampos(): boolean {
    if (
      this.loginForm.value.email === '' ||
      this.loginForm.value.password === ''
    ) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return false;
    }

    if (this.loginForm.controls.email.errors) {
      Swal.fire('Error', 'El email no es valido', 'error');
      return false;
    }

    if (this.loginForm.controls.password.errors) {
      Swal.fire(
        'Error',
        'La contraseña debe tener minimo 6 caracteres',
        'error'
      );
      return false;
    }
    return true;
  }

  login() {
    if (!this.validarCampos()) return;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe((ok) => {
      if (ok === true) {
        this.router.navigateByUrl('/autogestion/alumnos');
      } else {
        Swal.fire('Error', ok, 'error');
      }
    });
  }
}
