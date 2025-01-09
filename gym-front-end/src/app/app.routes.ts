import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loggin'
    },
    { path: 'loggin', loadComponent: () => import('./components/auth/loggin/loggin.component') },
    { path: 'register', loadComponent: () => import('./components/auth/register/register.component') },
    {
        path: 'admin',
        loadComponent: () => import('./components/admin/home/home.component'),
        canActivate: [authGuard],
        data: { roles: [1] }
    },
];
