import { Component,ViewChild, ElementRef } from '@angular/core';
import { GifssService } from '../services/gifss.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtInput') txtInput!:ElementRef<HTMLInputElement>;

  constructor(private  gifService:GifssService){}

  buscar(){
    const valor = this.txtInput.nativeElement.value

    this.gifService.buscargif(valor)

    this.txtInput.nativeElement.value = '';
  } 
}
