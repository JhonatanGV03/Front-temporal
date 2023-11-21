import { Component } from '@angular/core';
import {RegistroMedicoDTO} from "../../../modelo/administrador/registro-medico-dto";
import {AdministradorService} from "../../../servicios/administrador.service";
import {ClinicaService} from "../../../servicios/clinica.service";

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.css']
})
export class CrearMedicoComponent {
    registroMedicoDTO: RegistroMedicoDTO;
    archivos!:FileList;

    alerta: any;
    foto: string = 'assets/img/user-doctor-solid.svg';
    ciudades: String[];
    especialidades: String[];

    constructor(private adminService: AdministradorService, private clinicaService: ClinicaService) {
        this.registroMedicoDTO = new RegistroMedicoDTO();

        this.ciudades = [];
        this.cargarCiudades();

        this.especialidades = [];
        this.cargarEspecialidades();
    }

    public registrar(){
        if(this.archivos != null && this.archivos.length > 0){
            console.log(this.registroMedicoDTO);
        }else{
            console.log("Debe cargar una foto");
        }
    }

    onFileChange(event: any){
        if (event.target.files.length > 0) {
            const files = event.target.files;
            console.log(files);
            this.archivos = event.target.files;
        }
    }

    private cargarCiudades() {
        this.clinicaService.listarCiudades().subscribe({
            next: (data) => {
                this.ciudades = data.respuesta;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

    private cargarEspecialidades() {
        this.clinicaService.listarEspecialidad().subscribe({
            next: (data) => {
                this.especialidades = data.respuesta;
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
}
