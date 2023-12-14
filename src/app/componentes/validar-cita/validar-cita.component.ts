import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultarCitaService } from 'src/app/services/consultar-cita.service';
import { ConsultarCita } from 'src/app/models/consultarCita';

@Component({
  selector: 'app-validar-cita',
  templateUrl: './validar-cita.component.html',
  styleUrls: ['./validar-cita.component.css']
})
export class ValidarCitaComponent {
  constructor(
    public consultarCitaService:ConsultarCitaService) {}

  ngOnInit() {
    this.getByInfoCita();
  }

  getByInfoCita(){
    const idAlumno =  '1222100006';
    this.consultarCitaService.getByInfoCita(idAlumno).subscribe(
      res => {
        this.consultarCitaService.consultarCitas= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }
}