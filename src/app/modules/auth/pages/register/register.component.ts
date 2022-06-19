import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  btnColour = '#a54f4f';

  registroForm: FormGroup = this.fb.group({
    nombre: [''],
    apellido: [''],
    direccion: [''],
    telefono: [''],
    perfil: [''],
    email: [''],
    confirmarEmail: [''],
    password: [''],
    confirmarPassword: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  registrarse(){
    console.log("hola");
  }
}
