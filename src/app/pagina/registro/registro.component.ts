import { Component } from '@angular/core';
import {RegistroPacienteDTO} from "../../modelo/registro-paciente-dto";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

  registroPacienteDTO: RegistroPacienteDTO;
  ciudades:string[];
  tiposSangre: String[];
  eps: String[];
  archivos!:FileList;

  constructor(){
    this.registroPacienteDTO = new RegistroPacienteDTO();

    this.ciudades = [];
    this.cargarCiudades();

    this.tiposSangre = [];
    this.cargarTiposSangres();

    this.eps = [];
    this.cargarEps();


  }
  public registrar(){
    if(this.archivos != null && this.archivos.length > 0){
      console.log(this.registroPacienteDTO);
    }else{
      console.log("Debe cargar una foto");
    }
  }

  public sonIguales():boolean{
    return this.registroPacienteDTO.password == this.registroPacienteDTO.confirmaPassword;
  }

  private cargarCiudades() {
    this.ciudades.push('Armenia');
    this.ciudades.push('Calarcá');
    this.ciudades.push('Pereira');
    this.ciudades.push('Manizales');
    this.ciudades.push('Medellín');
  }

  private cargarTiposSangres() {
    this.tiposSangre.push('O+');
    this.tiposSangre.push('O-');
    this.tiposSangre.push('A+');
    this.tiposSangre.push('A-');
    this.tiposSangre.push('B+');
    this.tiposSangre.push('B-');
    this.tiposSangre.push('AB+');
    this.tiposSangre.push('AB-');
  }

  private cargarEps() {
    this.eps.push('SANITAS1');
    this.eps.push('SANITAS2');
    this.eps.push('SANITAS3');
    this.eps.push('SANITAS4');
    this.eps.push('SANITAS5');
  }

  public onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
      console.log(files);
    }
  }
}
