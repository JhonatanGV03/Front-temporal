export class PQRSPacienteDTO {

        codigoCita: number=0;
        codigoPaciente:number=0;
        mensaje:string="";
        tipoPQRS:string="";

        constructor(codigoPaciente:number) {
            this.codigoPaciente = codigoPaciente;
          }
}

