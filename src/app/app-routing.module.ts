import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleConsultaComponent } from './pagina/detalle-consulta/detalle-consulta.component';
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import {GestionarMedicosComponent} from "./pagina/admin/gestionar-medicos/gestionar-medicos.component";
import {CrearMedicoComponent} from "./pagina/admin/crear-medico/crear-medico.component";
import {DetalleMedicoComponent} from "./pagina/admin/detalle-medico/detalle-medico.component";
import {EditarMedicoComponent} from "./pagina/admin/editar-medico/editar-medico.component";
import {GestionarPqrsAdminComponent} from "./pagina/admin/gestionar-pqrs-admin/gestionar-pqrs-admin.component";
import {DetallePqrsAdminComponent} from "./pagina/admin/detalle-pqrs-admin/detalle-pqrs-admin.component";
import {GestionarCitasComponent} from "./pagina/medico/gestionar-citas/gestionar-citas.component";
import {AtencionCitaComponent} from "./pagina/medico/atencion-cita/atencion-cita.component";
import {
  HistorialCitasPacienteComponent
} from "./pagina/medico/historial-citas-paciente/historial-citas-paciente.component";
import {
  HistorialConsultasMedicoComponent
} from "./pagina/medico/historial-consultas-medico/historial-consultas-medico.component";

const routes: Routes = [
  { path: '', component: InicioComponent },
  //Comienzo de la enrutacion
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  //Paciente
  {
    path: 'modificar-paciente',
    component: ModificarPacienteComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'cambiar-password',
    component: CambiarPasswordComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'gestion-pqrs',
    component: GestionPqrsComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'crear-pqrs',
    component: CrearPqrsComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'detalle-pqrs/:codigo',
    component: DetallePqrsComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'gestion-citas',
    component: GestionCitasComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'crear-cita',
    component: CrearCitaComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'detalle-cita/:codigo',
    component: DetalleCitaComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  {
    path: 'detalle-consulta/:codigo',
    component: DetalleConsultaComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    }
  },
  //Admin
  {
    path: 'detalle-pqrs/:codigo',
    component: DetallePqrsComponent,
    canActivate: [RolesGuard],
    data: { expectedRole: ['paciente', 'admin'] },
  },


  {
    path: 'gestion-medicos',
    component: GestionarMedicosComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },
  {
    path: 'crear-medico',
    component: CrearMedicoComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },
  {
    path: 'detalle-medico/:codigo',
    component: DetalleMedicoComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },
  {
    path: 'editar-medico/:codigo',
    component: EditarMedicoComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },
  {
    path: 'gestion-pqrs-admin',
    component: GestionarPqrsAdminComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },
  {
    path: 'detalle-pqrs-admin/:codigo',
    component: DetallePqrsAdminComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['admin'] },
  },

  {
    path: 'gestion-citas-medico',
    component: GestionarCitasComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['medico'] },
  },
  {
    path: 'atencion-cita/:codigo',
    component: AtencionCitaComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['medico'] },
  },
  {
    path: 'historial-paciente/:codigo',
    component: HistorialCitasPacienteComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['medico'] },
  },
  {
    path: 'historial-consultas',
    component: HistorialConsultasMedicoComponent,
    canActivate: [RolesGuard],
    data:{ expectedRole: ['medico'] },
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
