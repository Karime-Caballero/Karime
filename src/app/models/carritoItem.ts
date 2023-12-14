import { TipoCita } from "./tipoCita";

export class CarritoItem {
    idTipoCita?: any;
    nombreCita: String;
    descripCita: String;
    precioCita: String;
    cantidad: number;

    constructor(tipoCita: TipoCita) {
        this.idTipoCita = tipoCita.idTipoCita;
        this.nombreCita = tipoCita.nombreCita;
        this.descripCita = tipoCita.descripCita; 
        this.precioCita = tipoCita.precioCita;
        this.cantidad = 1;
    }
}
