import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  estudiante = {
    id_persona: 2,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    email: '',
    telefono: '',
    numero_matricula: '',
    grado: ''
  };

  guardar() {
    console.log('Estudiante guardado:', this.estudiante);
    // Aquí puedes usar un servicio para enviar al backend
  }
}
