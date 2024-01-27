import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';

export const routes: Routes = [
  { path: '', redirectTo: '/spendings', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'spendings', component: SpendingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-reset', component: PasswordResetComponent },
];
