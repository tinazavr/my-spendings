import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Category } from '../category';
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

  constructor(private categoriesServive: CategoriesService) {}
  ngOnInit(): void {
    this.categoriesList = this.categoriesServive.getCategories();
  }
}
