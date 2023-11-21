import { Component } from '@angular/core';
import {DetallesMedicoDTO} from "../../../modelo/administrador/detalles-medico-dto";

@Component({
  selector: 'app-detalle-medico',
  templateUrl: './detalle-medico.component.html',
  styleUrls: ['./detalle-medico.component.css']
})
export class DetalleMedicoComponent {
  detallesMedicoDTO: DetallesMedicoDTO | undefined;
  foto: any;

  constructor() {
  }


}
