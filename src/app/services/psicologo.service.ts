import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Psicologo } from '../models/psicologo';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  URL_API='http://172.31.0.36:3000/psicologo/';

  public psicologo:Psicologo=
  {
    idPsicologo: '',
    nombrePsi: '',
    apPaternoPsi: '',
    apMaternoPsi: '',
    correo: '',
    password: ''
  };

  psicologos:Psicologo[]=[];

  constructor(private http: HttpClient) { }

  getPsicologo(){
    return this.http.get<Psicologo[]>(this.URL_API);
  }

  getByPsicologo(idPsicologo: String){
    return this.http.get<Psicologo[]>(this.URL_API+idPsicologo);
  }

  createPsicologo(psicologo:Psicologo){
    return this.http.post(this.URL_API,psicologo);
  }

  deletePsicologo(idPsicologo:String){
    return this.http.delete(this.URL_API+idPsicologo);
  }

  editPsicologo(psicologo:Psicologo){
    return this.http.put(this.URL_API+psicologo.idPsicologo,psicologo);
  }
}
