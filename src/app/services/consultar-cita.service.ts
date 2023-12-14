import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsultarCita } from '../models/consultarCita';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCitaService {

  constructor(private http : HttpClient) { }

  URL_API = 'http://172.31.0.36:3000/consultar/';

  public consultarCita:ConsultarCita={
    idCita: '',
    idAlumno:'',
    status: '',
    nombreAlu: '',
    apPaternoAlu:'',
    apMaternoAlu:'',
    nombrePsi: '',
    apPaternoPsi: '',
    apMaternoPsi: '',
    nomConsultorio: '',
    ubicacion: '',
    nomModalidad: '',
    dia: '',
    mes: '',
    anio: '',
    horario: ''
  };

  consultarCitas:ConsultarCita[]=[];

  getByInfoCita(idAlumno: string) {
    return this.http.get<ConsultarCita[]>(this.URL_API+idAlumno);
  }

}
