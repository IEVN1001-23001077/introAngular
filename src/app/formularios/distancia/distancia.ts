import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './distancia.html'
})
export class Distancia {

  x1=0
  y1=0
  x2=0
  y2=0
  resultado: number=0
  calcular() {
    this.resultado = Math.sqrt(((this.x2 - this.x1) ** 2)+(this.y2 - this.y1) ** 2);
  }


}
