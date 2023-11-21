import { Component } from '@angular/core';
import {DetallesMedicoDTO} from "../../../modelo/administrador/detalles-medico-dto";

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent {
  detalleMedicoDTO: DetallesMedicoDTO;
  ciudades: string[];
  foto: any;
  especialidades: string[];
  alerta: any;

  constructor() {
    this.detalleMedicoDTO = new DetallesMedicoDTO();

    this.ciudades = [];

    this.especialidades = [];
  }
  guardar() {

  }

  onFileChange($event: Event) {

  }
}
