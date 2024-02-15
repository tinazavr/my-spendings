import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Spendings } from '../interfaces/spendings';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpendingsService {
  httpClient: HttpClient = inject(HttpClient);
  link = environment.apiLink + `/spendings`;
  getSpendings() {
    return this.httpClient.get<Spendings[]>(this.link);
  }

  addSpending(myNewSpend: Partial<Spendings>) {
    const body = myNewSpend;
    return this.httpClient.post(this.link, body);
  }
  constructor() {}
}
