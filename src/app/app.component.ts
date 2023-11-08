import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
import { SesionService } from './servicios/sesion.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Clínica Aurora';
  footer = 'Clínica Aurora - 2023';
  isLogged = false;
  username: string = '';
  constructor(
    private tokenService: TokenService,
    private sesionService: SesionService
  ) {}

  ngOnInit(): void {
    const objeto = this;
    this.sesionService.currentMessage.subscribe({
      next(value) {
        objeto.actualizarSesion(value, objeto.tokenService.getUsername());
      },
    });
    this.actualizarSesion(
      this.tokenService.isLogged(),
      this.tokenService.getUsername()
    );
  }
  private actualizarSesion(estado: boolean, username: string | null) {
    this.isLogged = estado;
    if (username != null) {
      this.username = username;
    }
  }
  logout() {
    this.tokenService.logout();
  }
}
