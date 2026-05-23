import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  if(sessionStorage.getItem('role')=="Admin" && sessionStorage.getItem('token')){
    return true ;
  }
  else{
    alert("Unauthorized Access!!")
    router.navigateByUrl('/signin')
    return false
  }
};
