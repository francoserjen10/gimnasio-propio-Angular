import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loggin'
    },
    { path: 'loggin', loadComponent: () => import('./components/auth/loggin/loggin.component') },
    { path: 'register', loadComponent: () => import('./components/auth/register/register.component') },
];
