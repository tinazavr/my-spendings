import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('categories')
  getCategories() {
    return [
      { id: 124, name: 'Flat' },
      { id: 0, name: 'Flat' },
      { id: 1, name: 'Gas/transport' },
      { id: 2, name: 'Kindergarten + lessons' },
      { id: 3, name: 'Food' },
      { id: 4, name: 'Polish lessons' },
      { id: 5, name: 'English lessons' },
      { id: 6, name: 'Online services' },
      { id: 7, name: 'Weekends / ski' },
      { id: 8, name: 'Health care' },
      { id: 9, name: 'Beauty' },
    ];
  }

  @Get('spendings')
  getSpendings() {
    return [
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
    ]
  }

}
