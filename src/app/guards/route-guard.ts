import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (sessionStorage.getItem('token')) {
    return true;
  } else {
    alert('Please login first ');
    router.navigateByUrl('/signin');
    return false;
  }
};
