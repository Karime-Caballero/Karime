import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consultorio } from '../models/consultorio';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  URL_API = 'http://172.31.0.36:3000/consultorio/'

  public consultorio:Consultorio={
    idConsultorio: '',
    nomConsultorio: '',
    ubicacion: '',
    horaApertura: '',
    horaCierre: ''
  };

  consultorios:Consultorio[]=[];

  constructor(private http: HttpClient) { }

  getConsultorio(){
    return this.http.get<Consultorio[]>(this.URL_API);
  }

  getByConsultorio(idConsultorio: String){
    return this.http.get<Consultorio[]>(this.URL_API+idConsultorio);
  }

  createConsultorio(consultorio:Consultorio){
    return this.http.post(this.URL_API,consultorio);
  }

  deleteConsultorio(idConsultorio:String){
    return this.http.delete(this.URL_API+idConsultorio);
  }

  editConsultorio(consultorio:Consultorio){
    return this.http.put(this.URL_API+consultorio.idConsultorio,consultorio);
  }
}
