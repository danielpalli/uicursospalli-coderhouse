import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ['user4@user.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  login() {
    if (
      this.miFormulario.value.email !== '' &&
      this.miFormulario.value.password !== ''
    ) {
      this.router.navigateByUrl('/inicio');
    }
  }
}
