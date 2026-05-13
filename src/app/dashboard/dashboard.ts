import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-dashboard',
  imports: [Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  callsignin() {
    console.log('callsignin');
  }
}
