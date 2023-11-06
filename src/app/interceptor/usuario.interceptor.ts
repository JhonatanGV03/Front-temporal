import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, concatMap, Observable, throwError } from 'rxjs';
import { TokenService } from '../servicios/token.service';
import { AuthService } from '../servicios/auth.service';
import { JwtDto } from '../modelo/jwt-dto';
const AUTHORIZATION = 'Authorization';
const BEARER = 'Bearer ';
@Injectable()
export class UsuarioInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.tokenService.isLogged()) {
      return next.handle(req);
    }
    let initReq = req;
    let token = this.tokenService.getToken();
    initReq = this.addToken(req, token!);
    return next.handle(initReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          const jwt: JwtDto = new JwtDto();
          jwt.token = this.tokenService.getToken()!;
          return this.authService.refresh(jwt).pipe(
            concatMap((data: any) => {
              if (data && data.respuesta && data.respuesta.token) {
                this.tokenService.setToken(data.respuesta.token);
                initReq = this.addToken(req, data.respuesta.token);
                return next.handle(initReq);
              } else {
                return throwError(() => err);
              }
            })
          );
        } else {
          return throwError(() => err);
        }
      })
    );
  }
  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set(AUTHORIZATION, BEARER + token),
    });
  }
}
