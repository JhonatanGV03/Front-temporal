import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class ClinicaService {
private clinicaURL = "http://localhost:8080/api/clinica";
constructor(private http: HttpClient) { }
public listarCiudades(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-ciudades`);
}
public listarEspecialidad(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-especialidad`);
}
public listarTipoSangre(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-tipo-sangre`);
}
public listarEPS(): Observable<MensajeDTO> {
return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-eps`);
}
public listarTiposPQRS(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-tipos-PQRS`);
    }
    public listarMedicos(): Observable<MensajeDTO> {
        return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-medicos`);
        }
}
