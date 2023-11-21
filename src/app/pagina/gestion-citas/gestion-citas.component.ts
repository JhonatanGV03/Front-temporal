import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemCitaDTO } from 'src/app/modelo/paciente/item-cita-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.css']
})
export class GestionCitasComponent {

  citas: ItemCitaDTO[];
  constructor(private pacienteService: PacienteService, private tokenService: TokenService, private clinicaService: ClinicaService){
    this.citas = [];
    this.obtenerCitas();

  }
  public obtenerCitas() {
    let codigo = this.tokenService.getCodigo();
    this.pacienteService.listarCitasPaciente(codigo).subscribe({
    next: data => {
    this.citas = data.respuesta;
    },
    error: error => {
    console.log(error);
    }
    });
    }

    //Falta por programar
    public buscarPorFecha() {
      
      }
    public buscarPorMedico() {
      
    }


}