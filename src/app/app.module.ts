import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraCitaComponent } from './componentes/barra-cita/barra-cita.component';
import { ConsultarCitaComponent } from './componentes/consultar-cita/consultar-cita.component';
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component';
import { ValidarCitaComponent } from './componentes/validar-cita/validar-cita.component';
import { AgendarConsultorioComponent } from './componentes/agendar-consultorio/agendar-consultorio.component';
import { PagoComponent } from './componentes/pago/pago.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { DetallesComponent } from './componentes/detalles/detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CarritoItemComponent } from './componentes/carrito-item/carrito-item.component';

//IMPORTACIONES EXTERNAS
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './componentes/modal/modal.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    BarraCitaComponent,
    ConsultarCitaComponent,
    AgendarCitaComponent,
    ValidarCitaComponent,
    AgendarConsultorioComponent,
    PagoComponent,
    HomeComponent,
    LoginComponent,
    RegistrarseComponent,
    MapaComponent,
    TiendaComponent,
    DetallesComponent,
    CarritoComponent,
    CarritoItemComponent,
    ModalComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //PERMITE EL USO DE FORMULARIOS
    HttpClientModule,
    NgxPayPalModule,
    NgxSpinnerModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
