import { Component } from '@angular/core';
import {ItemCitaMedicoDTO} from "../../../modelo/medico/item-cita-medico-dto";

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {
    fecha: any;
    citas: ItemCitaMedicoDTO[];
    cantCitas: number = 0;

    constructor() {
        this.citas = [];
    }
}
