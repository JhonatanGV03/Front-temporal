import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemCitaDTO } from 'src/app/modelo/paciente/item-cita-dto';
import { PQRSPacienteDTO } from 'src/app/modelo/paciente/pqrspaciente-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-crear-pqrs',
  templateUrl: './crear-pqrs.component.html',
  styleUrls: ['./crear-pqrs.component.css'],
})
export class CrearPqrsComponent {
  PQRSpacienteDTO: PQRSPacienteDTO;
  tipoPQRS: string[];
  citas: ItemCitaDTO[];

  
  alerta!: Alerta;
  
  constructor(
    private pacienteService: PacienteService,
    private clinicaService: ClinicaService,
    private tokenService: TokenService
  ) {
    let codigoPaciente = this.tokenService.getCodigo();
    this.PQRSpacienteDTO = new PQRSPacienteDTO(codigoPaciente);
    this.tipoPQRS = [];
    this.cargarTiposPQRS();
    this.citas = [];
    this.obtenerCitas();
  }
  public crearPqrs() {
    this.pacienteService.crearPQRS(this.PQRSpacienteDTO).subscribe({
      next: (data) => {
        this.alerta = { mensaje: data.respuesta, tipo: 'success' };
      },
      error: (error) => {
        this.alerta = { mensaje: error.error.respuesta, tipo: 'danger' };
      },
    });
  }

  
  public seleccionar(codigoCita: number) {
    this.PQRSpacienteDTO.codigoCita = codigoCita;
  }

  public obtenerCitas() {
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.listarCitasPaciente(codigo).subscribe({
      next: (data) => {
        this.citas = data.respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  private cargarTiposPQRS() {
    this.clinicaService.listarTiposPQRS().subscribe({
      next: (data) => {
        this.tipoPQRS = data.respuesta;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
