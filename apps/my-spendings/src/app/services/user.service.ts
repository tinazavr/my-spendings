import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient: HttpClient = inject(HttpClient);

  signIn(userLogin: string, userPassword: string) {
    const link = `https://u4v0osmq9i.execute-api.eu-central-1.amazonaws.com/api/user/auth`;

    const body = { email: userLogin, password: userPassword };
    return this.httpClient.post(link, body, {withCredentials: true});
    
  }
}
