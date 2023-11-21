import { Injectable } from '@angular/core';
import {ItemMedicoDTO} from "../modelo/administrador/item-medico-dto";
import {MensajeDTO} from "../modelo/mensaje-dto";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RegistroConsultaDTO} from "../modelo/medico/registro-consulta-dto";
import {DiaLibreDTO} from "../modelo/medico/dia-libre-dto";

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private userUrl = "http://localhost:8080/api/medicos";

  constructor(private http:HttpClient) {}

  public listarCitasPendientes(codigoMedico: number, dia: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/citasPendientes/${codigoMedico}/${dia}`);
  }
  public atenderCita(registroConsultaDTO: RegistroConsultaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/atencionCita`, registroConsultaDTO);
  }
  public cargarRegistro(codigoCita: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/carga_Cita/${codigoCita}`);
  }
  public listarHistorialPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/cargaHistorialPaciente/${codigoPaciente}`);
  }
  public agendarDiaLibre(diaLibreDTO: DiaLibreDTO, codigoMedico: number): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.userUrl}/agendarDiaLibre/${codigoMedico}`, diaLibreDTO);
  }
  public listarCitasRealizadasMedico(codigoMedico: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/citasRealizadas/${codigoMedico}`);
  }
}
