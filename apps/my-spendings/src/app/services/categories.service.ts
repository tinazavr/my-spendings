import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  httpClient: HttpClient = inject(HttpClient);
  link = environment.apiLink + `/categories`;

  getCategories() {
    return this.httpClient.get<Category[]>(this.link);
  }
  addCategory(newCategory: string) {
    const body = { categoryName: newCategory };
    return this.httpClient.post(this.link, body);
  }
  constructor() {}
}
