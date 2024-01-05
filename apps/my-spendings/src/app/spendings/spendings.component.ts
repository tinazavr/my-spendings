import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Spendings } from '../interfaces/spendings';
import { SpendingsService } from '../services/spendings.service';
import { MatTableModule } from '@angular/material/table';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';
import { firstValueFrom } from 'rxjs';

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

  async ngOnInit(): Promise<void> {
    await this.loadCategories();
    this.createCategoriesObject();
    await this.loadSpendings();
    this.setCategoryNames();
  }
  async loadSpendings(): Promise<void> {
    this.spendingsList = await firstValueFrom(
      this.spendingsService.getSpendings()
    );
  }
  async loadCategories(): Promise<void> {
    this.categoriesList = await firstValueFrom(this.categories.getCategories());
  }
  createCategoriesObject(): void {
    for (const element of this.categoriesList) {
      this.categoriesObj[element.id] = element;
    }
  }
  setCategoryNames() {
    for (const element of this.spendingsList) {
      element.categoryName = this.findCategoryName(element.categoryId);
    }
  }
  findCategoryName(id: number): string {
    return this.categoriesObj[id].name;
  }
}
