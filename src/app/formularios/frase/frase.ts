import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frase',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frase.html'
})
export class Frase {

  frase = '';

  resultadoVocales = '';
  resultadoConsonantes = '';
  resultadoPalindromo = '';

  analizarFrase() {

  
    let vocalesMinusculas = ['a', 'e', 'i', 'o', 'u'];
    let vocalesMayusculas = ['A', 'E', 'I', 'O', 'U'];

  
    let vocalesEncontradas: string[] = [];
    let consonantesEncontradas: string[] = [];

   
    let caracteres: string[] = [];

    let cantidadVocales = 0;
    let cantidadConsonantes = 0;

    let posicion = 0;

    
    while (this.frase[posicion] !== undefined) {

      let caracter = this.frase[posicion];

      
      if (caracter !== ' ') {
        caracteres.push(caracter);
      }

      
      if (
        caracter === vocalesMinusculas[0] ||
        caracter === vocalesMinusculas[1] ||
        caracter === vocalesMinusculas[2] ||
        caracter === vocalesMinusculas[3] ||
        caracter === vocalesMinusculas[4]
      ) {

        vocalesEncontradas.push(caracter);
        cantidadVocales++;

      }

      
      else if (
        caracter === vocalesMayusculas[0] ||
        caracter === vocalesMayusculas[1] ||
        caracter === vocalesMayusculas[2] ||
        caracter === vocalesMayusculas[3] ||
        caracter === vocalesMayusculas[4]
      ) {

        vocalesEncontradas.push(caracter);
        cantidadVocales++;

      }

      
      else if (caracter >= 'a' && caracter <= 'z') {

        consonantesEncontradas.push(caracter);
        cantidadConsonantes++;

      }

      
      else if (caracter >= 'A' && caracter <= 'Z') {

        consonantesEncontradas.push(caracter);
        cantidadConsonantes++;

      }

      posicion++;
    }

   
    let textoVocales = '';

    let i = 0;

    while (vocalesEncontradas[i] !== undefined) {

      textoVocales = textoVocales + vocalesEncontradas[i];

      i++;
    }

    
    let textoConsonantes = '';

    i = 0;

    while (consonantesEncontradas[i] !== undefined) {

      textoConsonantes =
        textoConsonantes + consonantesEncontradas[i];

      i++;
    }

   
    this.resultadoVocales =
      'Número de vocales: ' +
      cantidadVocales +
      ' | Vocales: ' +
      textoVocales;

    
    this.resultadoConsonantes =
      'Número de consonantes: ' +
      cantidadConsonantes +
      ' | Consonantes: ' +
      textoConsonantes;

   
    let izquierda = 0;
    let derecha = 0;

  
    while (caracteres[derecha] !== undefined) {
      derecha++;
    }

    derecha--;

    let esPalindromo = true;

    while (izquierda < derecha) {

      let caracterIzquierdo = caracteres[izquierda];
      let caracterDerecho = caracteres[derecha];

     
      if (caracterIzquierdo === caracterDerecho) {

        izquierda++;
        derecha--;

      }

      
      else if (
        (caracterIzquierdo === 'A' && caracterDerecho === 'a') ||
        (caracterIzquierdo === 'a' && caracterDerecho === 'A') ||
        (caracterIzquierdo === 'B' && caracterDerecho === 'b') ||
        (caracterIzquierdo === 'b' && caracterDerecho === 'B') ||
        (caracterIzquierdo === 'C' && caracterDerecho === 'c') ||
        (caracterIzquierdo === 'c' && caracterDerecho === 'C') ||
        (caracterIzquierdo === 'D' && caracterDerecho === 'd') ||
        (caracterIzquierdo === 'd' && caracterDerecho === 'D') ||
        (caracterIzquierdo === 'E' && caracterDerecho === 'e') ||
        (caracterIzquierdo === 'e' && caracterDerecho === 'E') ||
        (caracterIzquierdo === 'F' && caracterDerecho === 'f') ||
        (caracterIzquierdo === 'f' && caracterDerecho === 'F') ||
        (caracterIzquierdo === 'G' && caracterDerecho === 'g') ||
        (caracterIzquierdo === 'g' && caracterDerecho === 'G') ||
        (caracterIzquierdo === 'H' && caracterDerecho === 'h') ||
        (caracterIzquierdo === 'h' && caracterDerecho === 'H') ||
        (caracterIzquierdo === 'I' && caracterDerecho === 'i') ||
        (caracterIzquierdo === 'i' && caracterDerecho === 'I') ||
        (caracterIzquierdo === 'J' && caracterDerecho === 'j') ||
        (caracterIzquierdo === 'j' && caracterDerecho === 'J') ||
        (caracterIzquierdo === 'K' && caracterDerecho === 'k') ||
        (caracterIzquierdo === 'k' && caracterDerecho === 'K') ||
        (caracterIzquierdo === 'L' && caracterDerecho === 'l') ||
        (caracterIzquierdo === 'l' && caracterDerecho === 'L') ||
        (caracterIzquierdo === 'M' && caracterDerecho === 'm') ||
        (caracterIzquierdo === 'm' && caracterDerecho === 'M') ||
        (caracterIzquierdo === 'N' && caracterDerecho === 'n') ||
        (caracterIzquierdo === 'n' && caracterDerecho === 'N') ||
        (caracterIzquierdo === 'O' && caracterDerecho === 'o') ||
        (caracterIzquierdo === 'o' && caracterDerecho === 'O') ||
        (caracterIzquierdo === 'P' && caracterDerecho === 'p') ||
        (caracterIzquierdo === 'p' && caracterDerecho === 'P') ||
        (caracterIzquierdo === 'Q' && caracterDerecho === 'q') ||
        (caracterIzquierdo === 'q' && caracterDerecho === 'Q') ||
        (caracterIzquierdo === 'R' && caracterDerecho === 'r') ||
        (caracterIzquierdo === 'r' && caracterDerecho === 'R') ||
        (caracterIzquierdo === 'S' && caracterDerecho === 's') ||
        (caracterIzquierdo === 's' && caracterDerecho === 'S') ||
        (caracterIzquierdo === 'T' && caracterDerecho === 't') ||
        (caracterIzquierdo === 't' && caracterDerecho === 'T') ||
        (caracterIzquierdo === 'U' && caracterDerecho === 'u') ||
        (caracterIzquierdo === 'u' && caracterDerecho === 'U') ||
        (caracterIzquierdo === 'V' && caracterDerecho === 'v') ||
        (caracterIzquierdo === 'v' && caracterDerecho === 'V') ||
        (caracterIzquierdo === 'W' && caracterDerecho === 'w') ||
        (caracterIzquierdo === 'w' && caracterDerecho === 'W') ||
        (caracterIzquierdo === 'X' && caracterDerecho === 'x') ||
        (caracterIzquierdo === 'x' && caracterDerecho === 'X') ||
        (caracterIzquierdo === 'Y' && caracterDerecho === 'y') ||
        (caracterIzquierdo === 'y' && caracterDerecho === 'Y') ||
        (caracterIzquierdo === 'Z' && caracterDerecho === 'z') ||
        (caracterIzquierdo === 'z' && caracterDerecho === 'Z')
      ) {

        izquierda++;
        derecha--;

      }

      else {

        esPalindromo = false;
        break;

      }
    }

    if (esPalindromo) {

      this.resultadoPalindromo =
        'La frase es un palíndromo.';

    } else {

      this.resultadoPalindromo =
        'La frase no es un palíndromo.';

    }
  }
}

