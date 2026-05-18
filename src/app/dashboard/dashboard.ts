import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private router = inject(Router);
  callsignin() {
    console.log('callsignin');
    this.router.navigate(['/signin']);
  }

  callsignup() {
    console.log('callsignup');
    this.router.navigate(['/login']);
  }
}
