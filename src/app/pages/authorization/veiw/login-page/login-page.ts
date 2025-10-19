import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone:false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  loginForm: FormGroup;
  loading = false;

 constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log('ورود موفق:', this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }, 1500);
  }
}
