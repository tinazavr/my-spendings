import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Spendings } from '../interfaces/spendings';
import { SpendingsService } from '../services/spendings.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-spendings',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTableModule],
  templateUrl: './spendings.component.html',
  styleUrl: './spendings.component.scss',
})
export class SpendingsComponent implements OnInit {
  spendingsList: Spendings[] = [];
  displayedColumns: string[] = ['date', 'categoryId', 'title'];
  dataSource = this.spendingsList;
  constructor(private spendingsService: SpendingsService) {}
  ngOnInit(): void {
    this.spendingsList = this.spendingsService.getSpendings();
  }
}
