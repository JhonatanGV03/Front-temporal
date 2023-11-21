import { Component } from '@angular/core';
import {ItemCitaHistorialDTO} from "../../../modelo/medico/item-cita-historial-dto";

@Component({
  selector: 'app-historial-citas-paciente',
  templateUrl: './historial-citas-paciente.component.html',
  styleUrls: ['./historial-citas-paciente.component.css']
})
export class HistorialCitasPacienteComponent {
  citas: ItemCitaHistorialDTO[];

  constructor() {
    this.citas = [];
    this.obtenerCitas();
  }

  private obtenerCitas() {

  }
}
