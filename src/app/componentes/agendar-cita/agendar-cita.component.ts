import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { PsicologoService } from 'src/app/services/psicologo.service';
import { ModalidadService } from 'src/app/services/modalidad.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  constructor(public citaService:CitaService, public psicologoService:PsicologoService, public modalidadService:ModalidadService) { }

  ngOnInit():void{
    this.getCita();
    this.getPsicologo();
    this.getModalidad();
  }

  getCita(){
    this.citaService.getCita().subscribe(
      res => {
        this.citaService.citas= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getPsicologo(){
    this.psicologoService.getPsicologo().subscribe(
      res => {
        this.psicologoService.psicologos= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getModalidad(){
    this.modalidadService.getModalidad().subscribe(
      res => {
        this.modalidadService.modalidades= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createCita(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.citaService.createCita(form.value).subscribe(
      res=> {
        this.getCita();
        form.reset();
      },
      err=> console.log(err)
    )
  }
  
  formReset(form:NgForm){
    this.citaService.cita=form.value;
    form.reset();
  }
}