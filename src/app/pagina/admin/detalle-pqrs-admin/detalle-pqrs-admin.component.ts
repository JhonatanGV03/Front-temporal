import { Component } from '@angular/core';
import {DetallesPQRSAdminDTO} from "../../../modelo/administrador/detalles-pqrsadmin-dto";
import {ActivatedRoute} from "@angular/router";
import {AdministradorService} from "../../../servicios/administrador.service";

@Component({
  selector: 'app-detalle-pqrs-admin',
  templateUrl: './detalle-pqrs-admin.component.html',
  styleUrls: ['./detalle-pqrs-admin.component.css']
})
export class DetallePqrsAdminComponent {
  detallePqrsAdmin: DetallesPQRSAdminDTO | undefined;
  codigoPQRS: string = '';

    constructor(private route: ActivatedRoute,
                private adminService: AdministradorService,) {
      this.route.params.subscribe((params) => {
        this.codigoPQRS = params['codigo'];
      });
      this.obtenerDatos();
    }

  private obtenerDatos() {
    this.adminService.verDetallesPQRS(parseInt(this.codigoPQRS)).subscribe({
      next: data => {
        this.detallePqrsAdmin = data.respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }
  private cambiarEstadoPQRS(estado: string) {
    this.adminService.cambiarEstadoPQRS(parseInt(this.codigoPQRS), estado).subscribe({
      next: data => {
        console.log(data);
        this.obtenerDatos();
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
