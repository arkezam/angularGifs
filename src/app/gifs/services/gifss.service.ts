import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifssService {

  private _historial: string[] = [];

  resultado: any[]=[];


  get historial(){
    return [...this._historial];
  }


  constructor( private http: HttpClient){ 

    this._historial = JSON.parse(localStorage.getItem('historial')!)||[]

    this.resultado = JSON.parse(localStorage.getItem('resultado')!)||[]

  }



  buscargif( query:string){

    query = query.trim().toLocaleLowerCase()

    if(!this._historial.includes(query) && query){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10)
    localStorage.setItem('historial',JSON.stringify(this._historial))
  }

  
  this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=WU0m9aWm5spC3hZxWiY8n4BbHt1EWEMN&q=${query}&limit=10&offset=0&rating=g&lang=en`)
    .subscribe( (resp:any) => {
      localStorage.setItem('resultado',JSON.stringify(resp.data))
      this.resultado = resp.data
    })

  // fetch('https://api.giphy.com/v1/gifs/search?api_key=WU0m9aWm5spC3hZxWiY8n4BbHt1EWEMN&q=db+z&limit=10&offset=0&rating=g&lang=en').
  // then(r=>{
  //   console.log(r)
  // })

  }
}
