// import { Injectable } from '@angular/core';
// //import { Usuario } from 'src/app/models/usuario';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class UsuarioService {

//   URL_API='http://localhost:3000';

//   public usuario:Usuario={
//     idUser: 0,
//     usuario: '',
//     password: ''
//   };
  
//   usuarios: Usuario[]=[];

//   constructor(private http: HttpClient) { }

//   login(usuario: string, password: string): Observable<Usuario> {
//     const data = { usuario, password };
//     return this.http.post<Usuario>(`${this.URL_API}/login`, data);
//   }
// }
