import { Component } from '@angular/core';
import {ItemMedicoDTO} from "../../../modelo/administrador/item-medico-dto";
import {MedicoService} from "../../../servicios/medico.service";
import {TokenService} from "../../../servicios/token.service";
import {AdministradorService} from "../../../servicios/administrador.service";

@Component({
  selector: 'app-crear-medico',
  templateUrl: './gestionar-medicos.component.html',
  styleUrls: ['./gestionar-medicos.component.css']
})
export class GestionarMedicosComponent {
  medicos: ItemMedicoDTO[];
  constructor(private adminService: AdministradorService, private tokenService: TokenService) {
    this.medicos = [];
    this.obtenerMedicos();
  }

  private obtenerMedicos() {
    this.adminService.listarmedicos().subscribe(
        data => {
            console.log(data)
            this.medicos = data.respuesta;
        },
        error => {
            console.log(error);
        }
    )
  }
}
