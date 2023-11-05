import { Injectable } from '@angular/core';
import {ItemMedicoDTO} from "../modelo/item-medico-dto";
import {RegistroMedicoDTO} from "../modelo/registro-medico-dto";

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  medicos: ItemMedicoDTO[];

  constructor() {
    this.medicos = [];

    this.medicos.push({codigo: 1, cedula: "1234567890", nombre: "Juan Perez", especialidad: "Medicina General"});
    this.medicos.push({codigo: 2, cedula: "0987654321", nombre: "Maria Lopez", especialidad: "Medicina General"});
    this.medicos.push({codigo: 3, cedula: "1231231231", nombre: "Carlos Sanchez", especialidad: "Medicina General"});
    this.medicos.push({codigo: 4, cedula: "4564564564", nombre: "Ana Martinez", especialidad: "Medicina General"});
    this.medicos.push({codigo: 5, cedula: "7897897897", nombre: "Pedro Rodriguez", especialidad: "Medicina General"});
  }
  public listar(): ItemMedicoDTO[] {
    return this.medicos;
  }
  public obtener(codigo: number): ItemMedicoDTO | undefined{
    return this.medicos.find(medicos => medicos.codigo == codigo);
  }
  public crear(medicos: RegistroMedicoDTO){
    let codigo = this.medicos.length + 1;
    this.medicos.push({ codigo: codigo, cedula: medicos.cedula, nombre: medicos.nombre, especialidad: medicos.especialidad});
  }
}
