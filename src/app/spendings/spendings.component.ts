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
  providers: [CategoriesService],
})
export class SpendingsComponent implements OnInit {
  spendingsList: Spendings[] = [];
  categoriesList: Category[] = [];

  displayedColumns: string[] = ['date', 'title', 'categoryName'];
  dataSource = this.spendingsList;
  constructor(
    private spendingsService: SpendingsService,
    private categories: CategoriesService
  ) {}
  ngOnInit(): void {
    this.spendingsList = this.spendingsService.getSpendings();
    this.categoriesList = this.categories.getCategories();

    for (let i = 0; i <= this.spendingsList.length; i++) {
      this.spendingsList[i].categoryName = this.findCategoryName(
        this.spendingsList[i].categoryId
      );
    }
  }
  findCategoryName(id: number): any {
    for (let k = 0; k <= this.categoriesList.length; k++) {
     if (id === this.categoriesList[k].id) {
        return this.categoriesList[k].name;
      }
    }
  }

}