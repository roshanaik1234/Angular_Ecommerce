import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { SinginPage } from './singin-page/singin-page';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
   { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'signin', component: SinginPage },
  // { path: 'signup', component: SignupPageComponent }
];
