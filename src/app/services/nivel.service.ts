import { Injectable } from '@angular/core';
import { Nivel } from '../models/nivel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  URL_API = 'http://172.31.0.36:3000/nivel/'

  public nivel:Nivel={
    idNivel: '',
    nomNivel: '',
    descripcionNivel: ''
  };

  niveles:Nivel[]=[];

  constructor(private http: HttpClient) { }

  getAlumno(){
    return this.http.get<Nivel[]>(this.URL_API);
  }

  getByAlumno(idAlumno: String){
    return this.http.get<Nivel[]>(this.URL_API+idAlumno);
  }

  createAlumno(nivel:Nivel){
    return this.http.post(this.URL_API,nivel);
  }

  deleteAlumno(idNivel:String){
    return this.http.delete(this.URL_API+idNivel);
  }

  editAlumno(nivel:Nivel){
    return this.http.put(this.URL_API+nivel.idNivel,nivel);
  }  
}
