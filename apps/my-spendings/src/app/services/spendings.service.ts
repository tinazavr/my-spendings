import { Injectable } from '@angular/core';
import { Spendings } from '../interfaces/spendings';

@Injectable({
  providedIn: 'root',
})
export class SpendingsService {
  private spendings: Spendings[] = [
    {
      id: 0,
      categoryId: 3,
      date: '30th April',
      title: 'Went to the supermarket',
    },
    {
      id: 1,
      categoryId: 8,
      date: '1th May',
      title: 'Visited doctor',
    },
    {
      id: 2,
      categoryId: 5,
      date: '1th May',
      title: 'Payed for 10 les.',
    },
    {
      id: 3,
      categoryId: 7,
      date: '4th May',
      title: 'Weekend near lake',
    },
    {
      id: 4,
      categoryId: 6,
      date: '9th May',
      title: 'Netflix',
    },
    {
      id: 5,
      categoryId: 2,
      date: '8th May',
      title: 'Paid for Judo lessons',
    },
  ];
  getSpendings(): Spendings[] {
    return this.spendings;
  }
  constructor() {}
}
