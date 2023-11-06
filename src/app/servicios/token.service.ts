import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";
import { SesionService } from './sesion.service';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private router: Router, private sesionService: SesionService) { }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  public login(token: string) {
    this.setToken(token);
    this.sesionService.updateSession(true);
    this.router.navigate(["/"]);
  }

  public logout() {
    window.sessionStorage.clear();
    this.sesionService.updateSession(false);
    this.router.navigate(["/login"]);
  }

  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

  public getCodigo(): number {
    const token = this.getToken();
    if (token) {
      const values = this.decodePayload(token);
      return values.id;
    }
    return 0;
  }

  public getUsername(): string | null {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const values = this.decodePayload(token!);
    const username = values.sub;
    return username;
  }

  public getRole(): string {
    if (!this.isLogged()) {
      return "";
    }
    const token = this.getToken();
    const values = this.decodePayload(token!);
    const roles = values.roles;
    return roles[0];
  }

}
