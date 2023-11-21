import { Component } from '@angular/core';
import { ItemMedicoDTO } from 'src/app/modelo/administrador/item-medico-dto';
import { Alerta } from 'src/app/modelo/alerta';
import { DetallesCitaDTO } from 'src/app/modelo/paciente/detalles-cita-dto';
import { RegistroCitaDTO } from 'src/app/modelo/paciente/registro-cita-dto';
import { RegistroRespuestaDTO } from 'src/app/modelo/registro-respuesta-dto';
import { AdministradorService } from 'src/app/servicios/administrador.service';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {



  detallesCitaDTO: RegistroCitaDTO;
  alerta!: Alerta;
  
  especialidades: String[];
  medicos: ItemMedicoDTO[];
  horas: String[]
  especialidadSelect: HTMLSelectElement | null = null;
  medicoSelect: HTMLSelectElement | null = null;
  constructor(private pacienteService: PacienteService, private tokenService: TokenService, private clinicaService: ClinicaService){
    this.detallesCitaDTO = new DetallesCitaDTO(this.tokenService.getCodigo());
    
    this.especialidades = [];
    this.cargarEspecialidades();
    this.medicos = [];
    this.horas = [];
  }

public agendarCita() {
  this.detallesCitaDTO.estadoCita = "PROGRAMADA";
  this.detallesCitaDTO.hora = "7:00:00";
  this.detallesCitaDTO.especialidad = "CIRUGIA";
  this.detallesCitaDTO.codigoMedico = 8;
  this.detallesCitaDTO.codigoPaciente = 5;
  this.detallesCitaDTO.motivoConsulta = "a";
  this.detallesCitaDTO.fecha = "2023-10-15";
  console.log(this.detallesCitaDTO.toString());
  this.pacienteService.agendarCita(this.detallesCitaDTO).subscribe({
    next: (data) => {
      this.alerta = { mensaje: data.respuesta, tipo: 'success' };
    },
    error: (error) => {
      this.alerta = { mensaje: error.error.respuesta, tipo: 'danger' };
    },
  });

}
public cargarEspecialidades(){
  this.clinicaService.listarEspecialidad().subscribe({
    next: (data) => {
      this.especialidades = data.respuesta;
    },
    error: (error) => {
      console.log(error);
    },
  });
}

public cargarMedicos(valorSeleccionado: string) {
  const selectedValue = valorSeleccionado || ''; // Asignar un valor por defecto si valorSeleccionado es nulo
  
  this.clinicaService.listarMedicos().subscribe({
    next: (data) => {
      this.medicos = data.respuesta; 
      
      // Filtrar medicos solo si hay un valor seleccionado
      if (selectedValue) {
        const medicosConEspecialidad: ItemMedicoDTO[] = this.medicos.filter((medico: ItemMedicoDTO) => medico.especialidad === this.detallesCitaDTO.especialidad);
        this.medicos = medicosConEspecialidad; 
      }
    },
    error: (error) => {
      console.log(error);
    },
  });
}


seleccionar(codMedico: any) {
    this.detallesCitaDTO.codigoMedico = codMedico;
  }

}