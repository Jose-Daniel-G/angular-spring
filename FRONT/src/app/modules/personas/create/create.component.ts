import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  persona = {
    id_persona: 1,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    email: '',
    telefono: ''
  };

  guardar() {
    console.log('Datos guardados:', this.persona);
    // Aquí puedes llamar un servicio para guardar en backend
  }
}
