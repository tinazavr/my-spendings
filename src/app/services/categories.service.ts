import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: { [key: number]: Category } = {
    0: { id: 0, name: 'Flat' },
    1: { id: 1, name: 'Gas/transport' },
    2: { id: 2, name: 'Kindergarten + lessons' },
    3: { id: 3, name: 'Food' },
    4: { id: 4, name: 'Polish lessons' },
    5: { id: 5, name: 'English lessons' },
    6: { id: 6, name: 'Online services' },
    7: { id: 7, name: 'Weekends / ski' },
    8: { id: 8, name: 'Health care' },
    9: { id: 9, name: 'Beauty' },
  };
  getCategories(): { [key: number]: Category } {
    return this.categories;
  }
  constructor() {
  }
}
