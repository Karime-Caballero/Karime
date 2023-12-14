import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  URL_API = 'http://172.31.0.36:3000/alumno/'

  public alumno:Alumno={
    idAlumno: '',
    nombreAlu: '',
    apPaternoAlu: '',
    apMaternoAlu: '',
    telefono: '',
    correo: '',
    password: '',
    idCarrera: ''
  };

  alumnos:Alumno[]=[];

  constructor(private http: HttpClient) { }

  getAlumno(){
    return this.http.get<Alumno[]>(this.URL_API);
  }

  getByAlumno(idAlumno: String){
    return this.http.get<Alumno[]>(this.URL_API+idAlumno);
  }

  createAlumno(alumno:Alumno){
    return this.http.post(this.URL_API,alumno);
  }

  deleteAlumno(idAlumno:String){
    return this.http.delete(this.URL_API+idAlumno);
  }

  editAlumno(alumno:Alumno){
    return this.http.put(this.URL_API+alumno.idAlumno,alumno);
  }
}
