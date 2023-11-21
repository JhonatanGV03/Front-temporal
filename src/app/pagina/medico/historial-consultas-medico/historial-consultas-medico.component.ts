import { Component } from '@angular/core';
import {ItemCitaRealizadaDTO} from "../../../modelo/medico/item-cita-realizada-dto";

@Component({
  selector: 'app-historial-consultas-medico',
  templateUrl: './historial-consultas-medico.component.html',
  styleUrls: ['./historial-consultas-medico.component.css']
})
export class HistorialConsultasMedicoComponent {
    citas: ItemCitaRealizadaDTO[];

    constructor() {
        this.citas = [];
        this.obtenerCitas();
    }

    private obtenerCitas() {

    }
}
