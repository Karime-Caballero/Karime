import { Component, Input, OnInit } from '@angular/core';
import { CarritoItem } from 'src/app/models/carritoItem';

@Component({
  selector: 'app-carrito-item',
  templateUrl: './carrito-item.component.html',
  styleUrls: ['./carrito-item.component.css']
})
export class CarritoItemComponent implements OnInit {
  @Input() carritoItem!: CarritoItem; // Asegúrate de importar Input desde '@angular/core'

  constructor() {}

  ngOnInit(): void {}
}
