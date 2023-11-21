import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { RegistroPQRSDTO } from '../modelo/registro-pqrsdto';
import { DetallePacienteDTO } from '../modelo/paciente/detalle-paciente-dto';
import { NewPasswordDTO } from '../modelo/new-password-dto';
import { RegistroRespuestaDTO } from '../modelo/registro-respuesta-dto';
import { RegistroCitaDTO } from '../modelo/paciente/registro-cita-dto';
import { PQRSPacienteDTO } from '../modelo/paciente/pqrspaciente-dto';

@Injectable({
  providedIn: 'root'
  })
  export class PacienteService {
  private userUrl = "http://localhost:8080/api/pacientes";
  constructor(private http: HttpClient) { }
  public verDetallePaciente(codigo: number): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.userUrl}/detalles/${codigo}`);
  }

  public editarPerfil(pacienteDTO: DetallePacienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.userUrl}/editar`, pacienteDTO);
  }

  public eliminarCuenta(codigo: number): Observable<MensajeDTO> {
  return this.http.delete<MensajeDTO>(`${this.userUrl}/eliminar/${codigo}`);
  }

  public listarPacientes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pacientes`);
    }

    public cambiarPassword(contrasena: NewPasswordDTO): Observable<MensajeDTO> {
      return this.http.put<MensajeDTO>(`${this.userUrl}/cambiar-password`, contrasena);
      }

  public crearPQRS(PQRSpacienteDTO: PQRSPacienteDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, PQRSpacienteDTO);
  }
  public listarPQRSPaciente(codigoPaciente: number): Observable<MensajeDTO> {
  return this.http.get<MensajeDTO>(`${this.userUrl}/listar-pqrs/${codigoPaciente}`);
  }

  public verDetallesPQRS(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/detalles-pqrs/${codigoPaciente}`);
    }

    public responderPQRS(registroRespuestaDTO:RegistroRespuestaDTO): Observable<MensajeDTO> {
      return this.http.post<MensajeDTO>(`${this.userUrl}/crear-pqrs`, registroRespuestaDTO);
      }

      public agendarCita(registroCitaDTO:RegistroCitaDTO): Observable<MensajeDTO> {
        return this.http.post<MensajeDTO>(`${this.userUrl}/agendar-cita`, registroCitaDTO);
        }

        public verDetallesCita(codigoPaciente: number): Observable<MensajeDTO> {
          return this.http.get<MensajeDTO>(`${this.userUrl}/detalles-cita/${codigoPaciente}`);
          }

  public listarCitasPaciente(codigoPaciente: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.userUrl}/listar-citas/${codigoPaciente}`);
    }
    public verDetalleConsulta(codigoPaciente: number): Observable<MensajeDTO> {
      return this.http.get<MensajeDTO>(`${this.userUrl}/detalles-consulta/${codigoPaciente}`);
      }
      public filtrarCitasPacientePorFecha(fecha: string,codigoPaciente: number): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.userUrl}/listar-cita/${codigoPaciente}/${fecha}`);
        }
        public filtrarCitasPacientePorMedico(codigoMedico: number,codigoPaciente: number): Observable<MensajeDTO> {
          return this.http.get<MensajeDTO>(`${this.userUrl}/listar-cita-medico/${codigoMedico}/${codigoPaciente}`);
          }
  }