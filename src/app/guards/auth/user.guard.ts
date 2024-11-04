import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../../Login/login.service';

export const UserGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const loginService = inject(LoginService);
    if(loginService.currenLogUser){
        return true;
    }
    else{
        router.navigate(['login'])
        return false;
    }

    return true;
};