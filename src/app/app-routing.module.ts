import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import {RegistroMedicosComponent} from "./pagina/registro-medicos/registro-medicos.component";
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "registro-medicos", component: RegistroMedicosComponent},
  { path: "modificar-paciente", component: ModificarPacienteComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
