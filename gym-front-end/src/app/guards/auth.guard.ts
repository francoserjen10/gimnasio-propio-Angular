import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Cookies from 'js-cookie';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const token = Cookies.get('token');
  if (token) {
    const userRole: number | null = authService.getRolesOfToken();
    if (userRole !== null) {
      if (userRole === 1) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
};
