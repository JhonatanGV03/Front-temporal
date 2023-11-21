import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroPacienteDTO } from '../modelo/paciente/registro-paciente-dto';
import { LoginDTO } from '../modelo/login-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class AuthService {
private authURL = "http://localhost:8080/api/auth";
constructor(private http:HttpClient) { }

public registrarse(paciente:RegistroPacienteDTO):Observable<MensajeDTO>{
  return this.http.post<MensajeDTO>(`${this.authURL}/registrarse`, paciente);
  }

  public login(loginDTO:LoginDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
    }
}
