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

