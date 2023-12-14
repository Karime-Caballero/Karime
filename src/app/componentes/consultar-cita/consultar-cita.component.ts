import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ConsultarCitaService } from 'src/app/services/consultar-cita.service';
import { ConsultarCita } from 'src/app/models/consultarCita';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.css'],
})
export class ConsultarCitaComponent implements OnInit {
  
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
