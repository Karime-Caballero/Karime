import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modalidad } from '../models/modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  URL_API = 'http://172.31.0.36:3000/modalidad/'

  public modalidad:Modalidad={
    idModalidad: '',
    nomModalidad: ''
  };

  modalidades:Modalidad[]=[];

  constructor(private http: HttpClient) { }

  getModalidad(){
    return this.http.get<Modalidad[]>(this.URL_API);
  }

  getByModalidad(idModalidad: String){
    return this.http.get<Modalidad[]>(this.URL_API+idModalidad);
  }

  createModalidad(modalidad:Modalidad){
    return this.http.post(this.URL_API,modalidad);
  }

  deleteModalidad(idModalidad:String){
    return this.http.delete(this.URL_API+idModalidad);
  }

  editModalidad(modalidad:Modalidad){
    return this.http.put(this.URL_API+modalidad.idModalidad,modalidad);
  }
}
