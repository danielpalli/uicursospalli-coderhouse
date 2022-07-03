import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  btnColour = '#a54f4f';

  registroForm: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    apellido: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    direccion: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9 ]+$'),
      ],
    ],
    telefono: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
    perfil: ['usuario'],
    email: ['', [Validators.required, Validators.email]],
    confirmarEmail: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmarPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  validarCampo(campo: string) {
    return (
      this.registroForm.controls[campo].errors &&
      this.registroForm.controls[campo].touched
    );
  }
  registrarse() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched();
      return;
    }

    if (
      this.registroForm.value.password !==
      this.registroForm.value.confirmarPassword
    ) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }
    if (
      this.registroForm.value.email !== this.registroForm.value.confirmarEmail
    ) {
      Swal.fire('Error', 'Los emails no coinciden', 'error');
      return;
    }

    const { nombre, apellido, direccion, telefono, perfil, email, password } =
      this.registroForm.value;
    this.authService
      .registro(nombre, apellido, direccion, telefono, email, password)
      .subscribe((ok) => {
        if (ok === true) {
          this.router.navigateByUrl('/auth/login');
        } else {
          Swal.fire('Error', ok, 'error');
        }
      });
  }
}
