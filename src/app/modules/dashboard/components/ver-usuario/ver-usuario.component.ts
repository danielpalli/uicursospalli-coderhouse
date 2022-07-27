import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Listado } from '../listado/listado.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Usuario from 'src/app/core/interfaces/usuarios.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.scss']
})
export class VerUsuarioComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<Listado>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
