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
  addCategory(newCategory: string) {
    const link = `http://localhost:3020/api/categories`;
    const body = { categoryName: newCategory };
    return this.httpClient.post(link, body);
   
  }
  constructor() {}
  
}
