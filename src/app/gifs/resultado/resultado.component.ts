import { Component } from '@angular/core';
import { GifssService } from '../services/gifss.service';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {
  get resultado(){
    return this.gifservice.resultado
  }

  constructor(private gifservice:GifssService){}
}
