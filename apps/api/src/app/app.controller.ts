import {Body, Controller, Get, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {categoriesList, spendingsList} from './stub-data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('categories')
  getCategories() {
    return categoriesList;
  }

  @Post('categories')
  addCategory(@Body() { categoryName }: any) {
    console.log(categoryName);
    categoriesList.push({ id: categoriesList.length, name: categoryName });
  }

  @Get('spendings')
  getSpendings() {
    return spendingsList;
  }

  @Post('spendings')
  addSpending(@Body() spending: any) {
    spendingsList.push({
      id: spendingsList.length,
      ...spending,
    });
  }
}
