import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('name') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    console.log ('leyenda' + this.leyenda);
    console.log ('progreso' + this.progreso);
   }

  ngOnInit() {
    console.log ('leyenda' + this.leyenda);
  }
  cambiarValor(valor) {
    if (this.progreso >= 100 && valor > 0 ) {
      console.log (this.progreso);
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      console.log (this.progreso);
      return;
    }
    console.log (this.progreso);
    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }


}
