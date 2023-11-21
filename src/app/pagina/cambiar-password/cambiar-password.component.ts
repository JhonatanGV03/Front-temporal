import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { NewPasswordDTO } from 'src/app/modelo/new-password-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {

  newPasswordDTO: NewPasswordDTO;
  
  alerta!: Alerta;

  constructor(    
    private pacienteService: PacienteService,
    ){
    this.newPasswordDTO = new NewPasswordDTO;
  }

  public sonIguales(): boolean {
    return (
      this.newPasswordDTO.newPassword ==
      this.newPasswordDTO.confirmPassword
    );
  }

  cambiarPassword() {
      this.pacienteService.cambiarPassword(this.newPasswordDTO).subscribe({
        next: (data) => {
          this.alerta = { mensaje: data.respuesta, tipo: 'success' };
        },
        error: (error) => {
          this.alerta = { mensaje: error.error.respuesta, tipo: 'danger' };
        },
      });
  }
}
