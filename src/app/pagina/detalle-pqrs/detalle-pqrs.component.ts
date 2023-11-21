import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallesPQRSDTO } from 'src/app/modelo/paciente/detalles-pqrsdto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-detalle-pqrs',
  templateUrl: './detalle-pqrs.component.html',
  styleUrls: ['./detalle-pqrs.component.css'],
})
export class DetallePqrsComponent {

  detallesPQRSDTO: DetallesPQRSDTO | undefined;
  codigoPQRS: string = '';

  constructor(private route: ActivatedRoute, private pacienteService: PacienteService, private tokenService: TokenService, private clinicaService: ClinicaService){
    this.route.params.subscribe((params) => {
      this.codigoPQRS = params['codigo'];
    });

    this.obtenerDatos();

  }
  public obtenerDatos() {
    this.pacienteService.verDetallesPQRS(parseInt(this.codigoPQRS)).subscribe({
      next: data => {
      this.detallesPQRSDTO = data.respuesta;
      },
      error: error => {
      console.log(error);
      }
      });
  }
}
