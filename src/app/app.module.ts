import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleConsultaComponent } from './pagina/detalle-consulta/detalle-consulta.component';
import { RecuperacionCuentaComponent } from './pagina/recuperacion-cuenta/recuperacion-cuenta.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import {NgOptimizedImage} from "@angular/common";
import { CrearMedicoComponent } from './pagina/admin/crear-medico/crear-medico.component';
import {GestionarMedicosComponent} from "./pagina/admin/gestionar-medicos/gestionar-medicos.component";
import { DetalleMedicoComponent } from './pagina/admin/detalle-medico/detalle-medico.component';
import { EditarMedicoComponent } from './pagina/admin/editar-medico/editar-medico.component';
import { GestionarPqrsAdminComponent } from './pagina/admin/gestionar-pqrs-admin/gestionar-pqrs-admin.component';
import { DetallePqrsAdminComponent } from './pagina/admin/detalle-pqrs-admin/detalle-pqrs-admin.component';
import { GestionarCitasComponent } from './pagina/medico/gestionar-citas/gestionar-citas.component';
import { AtencionCitaComponent } from './pagina/medico/atencion-cita/atencion-cita.component';
import { HistorialCitasPacienteComponent } from './pagina/medico/historial-citas-paciente/historial-citas-paciente.component';
import { HistorialConsultasMedicoComponent } from './pagina/medico/historial-consultas-medico/historial-consultas-medico.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    AlertaComponent,
    ModificarPacienteComponent,
    GestionCitasComponent,
    DetalleCitaComponent,
    DetalleConsultaComponent,
    RecuperacionCuentaComponent,
    CrearCitaComponent,
    CambiarPasswordComponent,
    GestionarMedicosComponent,
    CrearMedicoComponent,
    DetalleMedicoComponent,
    EditarMedicoComponent,
    GestionarPqrsAdminComponent,
    DetallePqrsAdminComponent,
    GestionarCitasComponent,
    AtencionCitaComponent,
    HistorialCitasPacienteComponent,
    HistorialConsultasMedicoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
