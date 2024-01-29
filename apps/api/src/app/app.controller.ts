import {Body, Controller, Get, Post} from '@nestjs/common';
import {categoriesList, spendingsList} from './stub-data';
import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('test-config')
  testConfig() {
    return this.appService.testConfig();
  }

  @Get('categories')
  getCategories() {
    return categoriesList;
  }

  @Post('categories')
  addCategory(@Body() {categoryName}: any) {
    console.log(categoryName);
    categoriesList.push({id: categoriesList.length, name: categoryName});
  }

  @Get('spendings')
  getSpendings() {
    return spendingsList;
  }

  @Post('spendings')
  addSpending(@Body() spending: any) {
    spendingsList.push({
      id: spendingsList.length,
      ...spending
    });
  }

}
