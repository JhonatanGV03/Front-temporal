import { RespuestaDTO } from "../respuesta-dto";

export interface DetallesPQRSDTO {
    codigo: number;
    fechaPQRS:string;
    estadoPQRS:string;
    fechaCita:string;
    nomMedico:string;
    especialidad:string;
    motivoPQRS:string;
    mensajes: RespuestaDTO[];

}
