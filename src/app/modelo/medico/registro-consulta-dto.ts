export class RegistroConsultaDTO {

    codigoCita: number = 0;
    fechaHoraAtencion: string = "";
    diagnosticoMedico: string = "";
    notasMedico: string = "";
    tratamientoMedico: string = "";
    motivoConsulta: string = "";
    estadoCita: string = "";


    //Datos Paciente
    codigoPaciente: number = 0;
    cedula:string = "";
    nombre:string = "";
    correo:string = "";
    eps:string = "";
    tipoSangre:string = "";
    alergias:string = "";
}
