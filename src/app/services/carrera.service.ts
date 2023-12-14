import { Injectable } from '@angular/core';
import { Carrera } from '../models/carrera';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http: HttpClient) { }

  URL_API = 'http://172.31.0.36:3000/carrera/'

  public carrera:Carrera={
    idCarrera: '',
    nomCarrera: '',
    area: ''
  };

  carreras:Carrera[]=[];

  getCarrera(){
    return this.http.get<Carrera[]>(this.URL_API);
  }

  getByCarrera(idCarrera: String){
    return this.http.get<Carrera[]>(this.URL_API+idCarrera);
  }

  createCarrera(carrera:Carrera){
    return this.http.post(this.URL_API,carrera);
  }

  deleteCarrera(idCarrera:String){
    return this.http.delete(this.URL_API+idCarrera);
  }

  editCarrera(carrera:Carrera){
    return this.http.put(this.URL_API+carrera.idCarrera,carrera);
  }
}
