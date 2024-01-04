import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  httpClient: HttpClient = inject(HttpClient);
  getCategories() {
    let link = `http://localhost:3020/api/categories`;
    return this.httpClient.get<Category[]>(link);
  }

  constructor() {}
}
//export class CategoriesService {
// private categories: Category[] = [
//   { id: 124, name: 'Flat' },
//   { id: 0, name: 'Flat' },
//   { id: 1, name: 'Gas/transport' },
//   { id: 2, name: 'Kindergarten + lessons' },
//   { id: 3, name: 'Food' },
//   { id: 4, name: 'Polish lessons' },
//   { id: 5, name: 'English lessons' },
//   { id: 6, name: 'Online services' },
//   { id: 7, name: 'Weekends / ski' },
//   { id: 8, name: 'Health care' },
//   { id: 9, name: 'Beauty' },
// ];
// getCategories(): Category[] {
//   return this.categories;
// }
