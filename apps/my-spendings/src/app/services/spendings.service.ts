import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Spendings } from '../interfaces/spendings';

@Injectable({
  providedIn: 'root',
})
export class SpendingsService {
  httpClient: HttpClient = inject(HttpClient);

  getSpendings() {
    const link = `http://localhost:3020/api/spendings`;
    return this.httpClient.get<Spendings[]>(link);
  }

  addSpending(myNewSpend: Partial<Spendings>) {
    const link = `http://localhost:3020/api/spendings`;
    const body = myNewSpend;
    return this.httpClient.post(link, body);
  }
  constructor() {}
}
