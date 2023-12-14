import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from 'src/app/models/cita'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http : HttpClient) { }

  URL_API = 'http://172.31.0.36:3000/cita/';

  public cita:Cita={
    idCita: 0,
    motivo: '',
    status: '',
    idAlumno: '',
    idConsultorio: '',
    idPsicologo: '',
    idNivel: '',
    idModalidad: ''
  };

  citas:Cita[]=[];

  getCita(){
    return this.http.get<Cita[]>(this.URL_API);
  }

  getByCita(idCita: String){
    return this.http.get<Cita[]>(this.URL_API+idCita);
  }

  createCita(cita:Cita){
    return this.http.post(this.URL_API,cita);
  }

  deleteCita(idCita:String){
    return this.http.delete(this.URL_API+idCita);
  }

  editCita(cita:Cita){
    return this.http.put(this.URL_API+cita.idCita,cita);
  }
}
