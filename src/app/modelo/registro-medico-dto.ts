import { HorarioDTO } from "./horario-dto";

export class RegistroMedicoDTO {
  nombre: string = "";
  cedula: string = "";
  ciudad: string = "";
  especialidad: string = "";
  telefono: string = "";
  correo: string = "";
  password: string = "";
  confirmaPassword: string = "";
  urlFoto: string = "";
  horarios: HorarioDTO[] = [];
  
}
