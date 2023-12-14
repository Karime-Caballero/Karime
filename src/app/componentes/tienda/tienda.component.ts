import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TipoCitaService } from 'src/app/services/tipo-cita.service'; 
import { MensagesService } from 'src/app/services/mensages.service';
import { TipoCita } from 'src/app/models/tipoCita';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {
  
  constructor(public tipoCitaService: TipoCitaService, private mensagesService:MensagesService) {}

  ngOnInit(): void {
    this.getTipoCita();
  }

  getTipoCita() {
    this.tipoCitaService.getTipoCita().subscribe(
      res => {
        this.tipoCitaService.tipoCitas = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  addToCart(tipoCita: TipoCita): void {
    console.log('Agregado al carrito:', tipoCita); //Esto se puede quitar
    this.mensagesService.sendMessage(tipoCita);
  }
  
}

