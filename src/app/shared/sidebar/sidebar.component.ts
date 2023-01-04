import { Component } from '@angular/core';
import { GifssService } from 'src/app/gifs/services/gifss.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})


 
export class SidebarComponent {
  
  get mostrar():string[]{
    return this.gifService.historial;
  }

  constructor(private  gifService:GifssService){}

  buscar(i:string){
    this.gifService.buscargif(i);
  }


}
