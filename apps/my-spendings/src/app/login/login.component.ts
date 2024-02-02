import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login: string = 'test@test.com';
  password: string = 'strongestpasswordEver12';
  posted: boolean | null = null;
  hide = true;
  signInButtonClicked() {
    const email = this.login.trim();

    //this.userService.signIn(email, this.password);
    this.userService.signIn(email, this.password).subscribe({
      next: () => {
        this.posted = true;
        this.login = '';
        this.password = '';
      },
      error: () => {
        this.posted = false;
      },
    });
  }

  // async loadSpendings(): Promise<void> {
  //   this.spendingsList = await firstValueFrom(
  //     this.spendingsService.getSpendings()
  //   );
  // }
  constructor(private userService: UserService) {}
}
