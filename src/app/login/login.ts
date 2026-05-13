import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // constructor(private router: Router) {}

  userid: string = '';
  password: string = '';

   private router = inject(Router);

  callme() {
    console.log("User ID:", this.userid, "Password:", this.password);
    
    if (this.userid === 'admin' && this.password === 'admin') {
    this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

}
