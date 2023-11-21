import {RespuestaDTO} from "../respuesta-dto";

export class DetallesPQRSAdminDTO {
  //Seccion PQRS
  codigo: number = 0;
  estadoPQRS: string = '';
  fechaPQRS: string = '';
  motivoPQRS: string = '';

  //Seccion Mensaje
  mensajes: RespuestaDTO[] = [];

  //Seccion Paciente
  nombrePaciente:string = '';
  cedulaPaciente:string = '';
  emailPaciente:string = '';


  //Seccion Cita Asociada
  nombreMedico:string = '';
  especialidad:string = '';
  fechaCita:string = '';
  estadoCita: string = '';
  motivoCita: string = '';
  notasMedico: string = '';
  diagnostico: string = '';
  tratamiento: string = '';
}
