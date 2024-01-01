import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SpendingsComponent } from './spendings/spendings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/spendings', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'spendings', component: SpendingsComponent },
];
