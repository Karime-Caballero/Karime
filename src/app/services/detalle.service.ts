import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalle } from '../models/detalle';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  URL_API = 'http://172.31.0.36:3000/detalle/'

  public detalle:Detalle={
    horario: '',
    fecha: '',
    status: '',
    idConsultorio: '',
    idPsicologo: '',
    idCita: 0
  };


  detalles:Detalle[]=[];

  constructor(private http: HttpClient) { }

  getDetalle(){
    return this.http.get<Detalle[]>(this.URL_API);
  }

  createDetalle(detalle:Detalle){
    return this.http.post(this.URL_API,detalle);
  }
}
