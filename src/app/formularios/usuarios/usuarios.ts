import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuarios.html',
})
export class Usuarios {

  IDCorrecto = 'admin';
  contraCorrecta = '12345';

  ID = '';
  contra = '';

  mensaje = '';

  iniciarSesion() {

    if (this.ID === this.IDCorrecto &&
        this.contra === this.contraCorrecta) {

      this.mensaje = 'Acceso Permitido !Bienvenido¡ ' + this.ID;

    } else if (this.ID !== this.IDCorrecto &&
               this.contra === this.contraCorrecta) {

      this.mensaje = 'El nombre de usuario es incorrecto.';

    } else if (this.ID === this.IDCorrecto &&
               this.contra !== this.contraCorrecta) {

      this.mensaje = 'La contraseña es incorrecta.';

    } else {

      this.mensaje = 'El usuario y la contraseña son incorrectos.';

    }
  }
}