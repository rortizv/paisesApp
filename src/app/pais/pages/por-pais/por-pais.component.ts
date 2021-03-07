import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Pais[] = [];

  //Inyectamos el servicio
  constructor( private paisService: PaisService ) { }
  
  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = []; //Si hay un error, esos no son los países a mostrar
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

}
