import { Component } from '@angular/core';
import { MedicosService } from 'src/app/servicios/medicos.service';
import { ItemMedicoDTO } from 'src/app/modelo/item-medico-dto';
import {RegistroMedicoDTO} from "../../modelo/registro-medico-dto";

@Component({
  selector: 'app-registro-medicos',
  templateUrl: './registro-medicos.component.html',
  styleUrls: ['./registro-medicos.component.css']
})
export class RegistroMedicosComponent {
  medicos: ItemMedicoDTO[];
  registroMedicoDTO: RegistroMedicoDTO;
  ciudades:string[];
  especialidad: String[];
  archivos!:FileList;

  constructor(private medicosService: MedicosService) {
    this.medicos = this.medicosService.listar();
    this.registroMedicoDTO = new RegistroMedicoDTO();

    this.ciudades = [];
    this.cargarCiudades();

    this.especialidad = [];
    this.cargarEspecialidad();

  }
  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroMedicoDTO);
    }else{
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales():boolean{
    return this.registroMedicoDTO.password == this.registroMedicoDTO.confirmaPassword;
  }

  private cargarCiudades() {
    this.ciudades.push('Armenia');
    this.ciudades.push('Calarcá');
    this.ciudades.push('Pereira');
    this.ciudades.push('Manizales');
    this.ciudades.push('Medellín');
  }
  private cargarEspecialidad() {
    this.especialidad.push('Medicina General');
    this.especialidad.push('Medicina Interna');
    this.especialidad.push('Neurologia');
    this.especialidad.push('Ortopedia');
    this.especialidad.push('Cardiologia');
  }

  public onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
      console.log(files);
    }
  }

}
