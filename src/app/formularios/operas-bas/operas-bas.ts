import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1 = 0;
  num2 = 0;
  resultado: number | string = 0;
  operacion = "sumar"; // operación por defecto

  calcular() {
    switch (this.operacion) {
      case "sumar":
        this.resultado = this.num1 + this.num2;
        break;

      case "restar":
        this.resultado = this.num1 - this.num2;
        break;

      case "multiplicar":
        this.resultado = this.num1 * this.num2;
        break;

      case "dividir":
        if (this.num2 === 0) {
          this.resultado = "No se puede dividir entre 0";
        } else {
          this.resultado = this.num1 / this.num2;
        }
        break;
    }
  }
}