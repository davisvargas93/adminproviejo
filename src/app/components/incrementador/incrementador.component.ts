import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

<<<<<<< HEAD
=======


>>>>>>> video 47
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @Input('name') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
<<<<<<< HEAD
  constructor() {
    console.log ('leyenda' + this.leyenda);
    console.log ('progreso' + this.progreso);
   }

=======
  
  constructor() {
    console.log ('leyenda' + this.leyenda);
    console.log ('progreso' + this.progreso);
  }
>>>>>>> video 47
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
<<<<<<< HEAD

    this.cambioValor.emit(this.progreso);
  }


=======
    this.cambioValor.emit(this.progreso);
  }
  onChanges(valor: number) {
    let elementHtml: any = document.getElementsByName('progreso')[0];
    if (valor >= 100 ) {
      this.progreso = 100;
    } else if (valor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }
    elementHtml.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
>>>>>>> video 47
}
