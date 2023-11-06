import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import {RegistroMedicosComponent} from "./pagina/registro-medicos/registro-medicos.component";
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';
import { LoginGuard } from './guards/login.guard';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "registro-medicos", component: RegistroMedicosComponent},
  { path: "modificar-paciente", component: ModificarPacienteComponent},
  { path: "api/pacientes/modificar-paciente", component: ModificarPacienteComponent, canActivate:[UsuarioGuard], data: { expectedRole: ["paciente"] }  },
  { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
  { path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
  { path: "api/admins/registro-medicos", component: RegistroMedicosComponent, canActivate:[UsuarioGuard], data: { expectedRole: ["admin"] } },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
