import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.getRolesOfToken().pipe(
    map(userRole => {
      if (userRole !== null) {
        if (userRole === 1) {
          return true;
        }
        if (userRole === 2) {
          return true;
        }
      }
      return false;
    })
  );
};