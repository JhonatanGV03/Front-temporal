import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
import {RegistroMedicoDTO} from "../modelo/administrador/registro-medico-dto";
import {RegistroAdminDTO} from "../modelo/administrador/registro-admin-dto";
import {DetallesMedicoDTO} from "../modelo/administrador/detalles-medico-dto";
import {RegistroRespuestaDTO} from "../modelo/registro-respuesta-dto";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private authURL = "http://localhost:8080/api/admin";
  constructor(private http:HttpClient) { }

  public crearMedico(medico:RegistroMedicoDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/crearMedico`, medico);
  }

  public crearAdmin(admin: RegistroAdminDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crearAdmin`, admin);
  }

  public actualizarmedico(medicoDTO: DetallesMedicoDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.authURL}/actualizarMedico`, medicoDTO);
  }
  public listarmedicos():Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.authURL}/listarMedicos`);
  }
  public eliminarmedico(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.authURL}/eliminarMedico/${codigo}`);
  }
  public obtenerMedico(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/verDetalleMedico/${codigo}`);
  }
  public listarPQRS(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarPQRS`);
  }

  public verDetallesPQRS(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/verDetallesPQRS/${codigo}`);
  }

  public responderPQRS(registroRespuesta: RegistroRespuestaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/responderPQRS`, registroRespuesta);
  }

  public cambiarEstadoPQRS(codigoPQRS: number, estadoPQRS: string): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.authURL}/cambiarEstadoPQRS/${codigoPQRS}`, estadoPQRS);
  }

  public listarCitas(codigoMedico: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listarCitas/${codigoMedico}`);
  }

}
