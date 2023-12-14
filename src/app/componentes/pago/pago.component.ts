import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal:any;

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef; /*PERMITE PODER REFERENCIAR #paypal */

  ngOnInit(): void { /*El método se ejecuta cuando el componente se inicializa*/
    paypal 
    .Buttons({
      style:{ /*Dar estilo a la interfaz de paypal*/
        color:'blue',
        shape:'pill',
        label:'pay'
      },
      createOrder: function(data:any, actions:any) { /*Agregar información del pago */
        return actions.order.create({
          purchase_units: [{
              amount: {
                value: 100,
                currency_code: 'MXN'
              }
          }]
        });
      },
      onApprove: function(data:any, actions:any){ /*Capturar los valores del pago*/
        actions.order.capture().then(function (detalles:any){
          console.log(detalles);
          window.location.href="" /*Redireccionar otra pantalla cuando la compra sea exitosa*/
        });
      },
      onCancel: function(data:any) { /*Cancelar un pago*/
        alert("Pago cancelado");
        console.log(data);
      }
    }) /*Se crea el bóton de pago*/
      .render(this.paypalElement.nativeElement); /*El método render() permite hacer visible el bóton en el HTML */
  }
}
