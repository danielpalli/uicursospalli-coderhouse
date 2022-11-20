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

  validarCampos(): boolean {
    for (const i in this.registroForm.controls) {
      if (this.registroForm.controls[i].errors) {
        Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
        return false;
      }
    }

    if (this.registroForm.controls.nombre.errors) {
      Swal.fire('Error', 'El nombre no es valido', 'error');
      return false;
    }

    if (this.registroForm.controls.apellido.errors) {
      Swal.fire('Error', 'El apellido no es valido', 'error');
      return false;
    }

    if (this.registroForm.controls.direccion.errors) {
      Swal.fire('Error', 'La direccion no es valida', 'error');
      return false;
    }

    if (this.registroForm.controls.telefono.errors) {
      Swal.fire('Error', 'El telefono no es valido', 'error');
      return false;
    }

    if (this.registroForm.controls.email.errors) {
      Swal.fire('Error', 'El email no es valido', 'error');
      return false;
    }

    if (this.registroForm.controls.password.errors) {
      Swal.fire(
        'Error',
        'La contraseña debe tener minimo 6 caracteres',
        'error'
      );
      return false;
    }

    if (
      this.registroForm.value.password !==
      this.registroForm.value.confirmarPassword
    ) {
      Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
      return false;
    }
    if (
      this.registroForm.value.email !== this.registroForm.value.confirmarEmail
    ) {
      Swal.fire('Error', 'Los emails no coinciden', 'error');
      return false;
    }

    return true;
  }

  registrarse() {
    if (!this.validarCampos()) return;

  //   const {
  //     nombre,
  //     apellido,
  //     direccion,
  //     telefono,
  //     perfil,
  //     sexo,
  //     email,
  //     password,
  //   } = this.registroForm.value;
  //   this.authService
  //     .registro(
  //       nombre,
  //       apellido,
  //       direccion,
  //       telefono,
  //       perfil,
  //       sexo,
  //       email,
  //       password
  //     )
  //     .subscribe((ok) => {
  //       if (ok === true) {
  //         this.router.navigateByUrl('/auth/login');
  //       } else {
  //         Swal.fire('Error', ok, 'error');
  //       }
  //     });
  }
}
