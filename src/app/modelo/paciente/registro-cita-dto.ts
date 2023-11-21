export class RegistroCitaDTO {
        
    codigoPaciente:number =0;
    especialidad:string="";
    codigoMedico:number= 0;
    fecha:string = "";
    hora:string=  "";
    motivoConsulta:string="";
    estadoCita:String ="";

    constructor(codigoPaciente:number){
            this.codigoPaciente = codigoPaciente;
    }
}
