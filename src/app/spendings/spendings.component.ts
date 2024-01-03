import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Spendings } from '../interfaces/spendings';
import { SpendingsService } from '../services/spendings.service';
import { MatTableModule } from '@angular/material/table';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-spendings',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTableModule],
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss',
})
export class SpendingsComponent implements OnInit {
  spendingsList: Spendings[] = [];
  categoriesList: Category[] = [];
  categoriesObj: { [key: number]: Category } = {};

  displayedColumns: string[] = ['date', 'title', 'categoryName'];
  dataSource = this.spendingsList;
  constructor(
    private spendingsService: SpendingsService,
    private categories: CategoriesService
  ) {}
  ngOnInit(): void {
    this.spendingsList = this.spendingsService.getSpendings();
    this.categoriesList = this.categories.getCategories();
    this.createCategoriesObject(this.categoriesList);

    for (let i = 0; i < this.spendingsList.length; i++) {
      this.spendingsList[i].categoryName = this.findCategoryName(
        this.spendingsList[i].categoryId
      );
    }
  }
  createCategoriesObject(list: Category[]): void {
    for (let i = 0; i < list.length; i++) {
      this.categoriesObj[list[i].id] = list[i];
    }
  }
  findCategoryName(id: number): string {
    return this.categoriesObj[id].name;
  }
}
