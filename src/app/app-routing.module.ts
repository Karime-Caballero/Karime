import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { ValidarCitaComponent } from './componentes/validar-cita/validar-cita.component';
import { AgendarConsultorioComponent } from './componentes/agendar-consultorio/agendar-consultorio.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { HomeComponent } from './componentes/home/home.component';
import { BarraCitaComponent } from './componentes/barra-cita/barra-cita.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';


const routes: Routes = [
  { path:'consultar-cita', component:ConsultarCitaComponent },
  { path:'agendar-cita', component:AgendarCitaComponent },
  { path:'validar-cita', component:ValidarCitaComponent },
  { path:'agendar-consultorio', component:AgendarConsultorioComponent },
  { path: 'barra-cita', component:BarraCitaComponent },
  { path:'pago', component:PagoComponent },
  { path:'', component:HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'registrarse', component:RegistrarseComponent },
  { path: 'tienda', component:TiendaComponent},
  { path: 'detalles', component:DetallesComponent},
  { path: 'nosotros', component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
