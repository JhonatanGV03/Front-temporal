import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenService } from '../servicios/token.service';
@Injectable({
  providedIn: 'root',
})
export class UsuarioGuard implements CanActivate {
  realRole: string = '';
  constructor(private tokenService: TokenService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRole: string[] = route.data['expectedRole'];
    this.realRole = this.tokenService.getRole();
    if (
      !this.tokenService.isLogged() ||
      expectedRole.indexOf(this.realRole) == -1
    ) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
}
