import { Routes } from '@angular/router';
import RegisterComponent from './components/auth/register/register.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/auth/loggin/loggin.component') },
    { path: 'register', loadComponent: () => import('./components/auth/register/register.component') }
];
