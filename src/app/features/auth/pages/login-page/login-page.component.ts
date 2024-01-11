import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export default class LoginPageComponent {

  private route = inject(Router);
  private fb = inject(FormBuilder);

  public loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  signIn(){
    console.log("test");
    this.route.navigate(['/universidad']);
  }
}
