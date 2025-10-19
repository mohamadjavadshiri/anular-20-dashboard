import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './veiw/login-page/login-page';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

export const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
];

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    ButtonModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    RouterModule.forChild(routes)
  ],

})
export class AuthorizationModule { }
