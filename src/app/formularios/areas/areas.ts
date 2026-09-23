import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './areas.html',
})
export class Areas {
  base = 0;
  altura = 0;
  radio=0;
  apotema=0;
  resultado: number =0
  operacion = "sumar"; 
  calcular() {
    switch (this.operacion) {
      case "1":
        this.resultado = this.base * this.altura;
        break;

      case "2":
        this.resultado = (this.base * this.altura)/2;
        break;

      case "3":
        this.resultado = Math.PI*(this.radio **2);
        break;

      case "4":
        this.resultado = ((this.base*5)*this.apotema)/2
        break;
    }
  }
}
