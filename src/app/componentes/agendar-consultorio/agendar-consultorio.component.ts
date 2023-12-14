import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetalleService } from 'src/app/services/detalle.service';
import { Detalle } from 'src/app/models/detalle';
import { PsicologoService } from 'src/app/services/psicologo.service';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-agendar-consultorio',
  templateUrl: './agendar-consultorio.component.html',
  styleUrls: ['./agendar-consultorio.component.css']
})
export class AgendarConsultorioComponent implements OnInit{
  constructor(public detalleService:DetalleService, public psicologoService:PsicologoService, public consultorioService:ConsultorioService) { }

  ngOnInit():void{
    this.getDetalle();
    this.getPsicologo();
    this.getConsultorio();
  }

  getDetalle(){
    this.detalleService.getDetalle().subscribe(
      res => {
        this.detalleService.detalles= res;
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

  getConsultorio(){
    this.consultorioService.getConsultorio().subscribe(
      res => {
        this.consultorioService.consultorios= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createDetalle(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.detalleService.createDetalle(form.value).subscribe(
      res=> {
        this.getDetalle();
        form.reset();
      },
      err=> console.log(err)
    )
  }
  
  formReset(form:NgForm){
    this.detalleService.detalles=form.value;
    form.reset();
  }
}
