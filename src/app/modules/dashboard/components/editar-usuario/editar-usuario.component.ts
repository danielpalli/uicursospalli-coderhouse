import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Listado } from '../listado/listado.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsuarioComponent implements OnInit {
  editarUsuarioForm: FormGroup = this.fb.group({
    _id: [this.data._id],
    nombre: [
      this.data.nombre,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    apellido: [
      this.data.apellido,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    direccion: [
      this.data.direccion,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z0-9 ]+$'),
      ],
    ],
    telefono: [
      this.data.telefono,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
    perfil: [this.data.perfil, [Validators.required]],
    email: [this.data.email, [Validators.required, Validators.email]],
  });

  constructor(
    public dialogRef: MatDialogRef<Listado>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  editarUsuario() {
    this.dialogRef.close(this.editarUsuarioForm.value);
  }
}
