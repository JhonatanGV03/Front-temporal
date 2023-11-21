import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MensajeDTO } from 'src/app/modelo/mensaje-dto';
import { DetallesConsultaDTO } from 'src/app/modelo/paciente/detalles-consulta-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-detalle-consulta',
  templateUrl: './detalle-consulta.component.html',
  styleUrls: ['./detalle-consulta.component.css']
})
export class DetalleConsultaComponent {

  detallesConsultaDTO: DetallesConsultaDTO | undefined;
  codigoCita: string = '';

  constructor(private route: ActivatedRoute, private pacienteService: PacienteService, private tokenService: TokenService, private clinicaService: ClinicaService){
    

    this.route.params.subscribe((params) => {
      this.codigoCita = params['codigo'];
    });

    this.obtenerDatos();
  }

  public obtenerDatos() {
    this.pacienteService.verDetalleConsulta(parseInt(this.codigoCita)).subscribe({
    next: data => {
    this.detallesConsultaDTO = data.respuesta;
    },
    error: error => {
    console.log(error);
    }
    });
  }
}
