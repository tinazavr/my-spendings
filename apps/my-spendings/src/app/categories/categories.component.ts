import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categoriesList: Category[] = [];

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categoriesList = data;
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }
  constructor(private categoriesService: CategoriesService) {}
}
