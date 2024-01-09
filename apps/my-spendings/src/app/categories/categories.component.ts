import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../interfaces/category';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {

  addCategoryClicked: boolean = false;
  categoriesList: Category[] = [];
  newCategoryName: string = '';

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categoriesList = data;
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }
  clickedAddCategory() {
    this.addCategoryClicked = true;
    //console.log('add button works!');
  }
  submitNewCategory(): void {
    this.categoriesService.addCategory(this.newCategoryName);
    console.log('from submitNewCategory method' + this.newCategoryName);

  }

  // changeCategoryName(){
  //   console.log(this.newCategoryName);
  // }
  // getInputValue(event: Event): void {
  //   console.log(
  //     'getInputValue method' + (event.target as HTMLInputElement).value
  //   );
    //return (event.target as HTMLInputElement).value;
 // }
  // submitValue(newTitle: string) {
  //   this.submit.emit(newTitle);
  // }
  // getInputValue(event: Event) {
  //   return (event.target as HTMLInputElement).value;
  // }
  constructor(private categoriesService: CategoriesService) {}
}
