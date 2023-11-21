import { Component } from '@angular/core';
import {ItemPQRSDTO} from "../../../modelo/item-pqrsdto";
import {AdministradorService} from "../../../servicios/administrador.service";
import {TokenService} from "../../../servicios/token.service";

@Component({
  selector: 'app-gestionar-pqrs-admin',
  templateUrl: './gestionar-pqrs-admin.component.html',
  styleUrls: ['./gestionar-pqrs-admin.component.css']
})
export class GestionarPqrsAdminComponent {
  pqrs: ItemPQRSDTO[];
  constructor(private adminService: AdministradorService, private tokenService: TokenService){
    this.pqrs = [];
    this.obtenerPqrs();
  }

  private obtenerPqrs() {
    this.adminService.listarPQRS().subscribe({
      next: data => {
        console.log(data)
        this.pqrs = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
