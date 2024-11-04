import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from '../../Login/login.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const loginService = inject(LoginService);
    console.log(loginService.currenLogUser)
    if(loginService.currenLogUser){
        router.navigate(['']);
        return false;
    }
    else{
        return true;
    }

    return true;
};