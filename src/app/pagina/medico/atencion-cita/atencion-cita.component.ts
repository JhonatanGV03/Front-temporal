import { Component } from '@angular/core';
import {RegistroConsultaDTO} from "../../../modelo/medico/registro-consulta-dto";

@Component({
  selector: 'app-atencion-cita',
  templateUrl: './atencion-cita.component.html',
  styleUrls: ['./atencion-cita.component.css']
})
export class AtencionCitaComponent {
  registroConsultaDTO: RegistroConsultaDTO;
  foto: any;

  constructor() {
    this.registroConsultaDTO = new RegistroConsultaDTO();
    this.obtenerDatosPaciente();
  }

  private obtenerDatosPaciente() {

  }
}
