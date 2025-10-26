import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <button (click)="goHome()">Go Back Home</button>
    </div>
  `,
  styles: [``
    .not-found-container {
      text-align: center;
      padding: 50px 20px;
      font-family: 'Lato', sans-serif;
    }
    h1 {
      font-size: 72px;
      color: #e74c3c;
      margin: 0;
    }
    h2 {
      color: #2c3e50;
      margin: 20px 0;
    }
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #2980b9;
    }
  `]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}