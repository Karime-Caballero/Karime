import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TipoCita } from '../models/tipoCita';

@Injectable({
  providedIn: 'root'
})
export class MensagesService {

  private message = new Subject<TipoCita>(); // Corregido: Subject de TipoCita

  constructor() { }

  sendMessage(tipoCita: TipoCita): void {
    this.message.next(tipoCita);
  }

  getMessage(): Observable<TipoCita> { // Corregido: Observable de TipoCita
    return this.message.asObservable();
  }
}
