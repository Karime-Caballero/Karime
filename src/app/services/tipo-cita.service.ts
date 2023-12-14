import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoCita } from '../models/tipoCita';

@Injectable({
  providedIn: 'root'
})
export class TipoCitaService {

  constructor(private http : HttpClient) { }

  URL_API = 'http://172.31.0.36:3000/tipo/';

    public tipoCita:TipoCita={
      idTipoCita: '',
      nombreCita: '',
      descripCita: '',
      precioCita: '',
      imagenUrl: ''
    };

  tipoCitas:TipoCita[]=[];

  getTipoCita(){
    return this.http.get<TipoCita[]>(this.URL_API);
  }

}
