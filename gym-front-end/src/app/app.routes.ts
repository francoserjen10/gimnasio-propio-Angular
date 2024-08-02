import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'register', loadComponent: () => import('./components/auth/register/register.component')},
    { path: '', loadComponent: () => import('./components/auth/loggin/loggin.component')}
];
