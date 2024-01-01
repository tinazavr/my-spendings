import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: Category[] = [
    { id: 0, name: 'Flat' },
    { id: 1, name: 'Gas/transport' },
    { id: 2, name: 'Kindergarten + lessons' },
    { id: 3, name: 'Food' },
    { id: 4, name: 'Polish lessons' },
    { id: 5, name: 'English lessons' },
    { id: 6, name: 'Online services' },
    { id: 7, name: 'Weekends / ski' },
    { id: 8, name: 'Health care' },
    { id: 9, name: 'Beauty' },
  ];

  getCategories(): Category[] {
    return this.categories;
  }
  constructor() {}
}
