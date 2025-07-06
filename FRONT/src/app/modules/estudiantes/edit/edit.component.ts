import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  estudianteId!: number;
  estudiante = {
    id_persona: 0,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    email: '',
    telefono: '',
    numero_matricula: '',
    grado: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.estudianteId = Number(this.route.snapshot.paramMap.get('id'));
    // const estudianteEncontrada = this.estudiantesMock.find(e => e.id_persona === id);
    // Simulación de datos traídos del backend
    const estudianteEncontrada = this.obtenerEstudiantePorId(this.estudianteId);

    if (estudianteEncontrada) {
      this.estudiante = { ...estudianteEncontrada };
    } else {
      alert('Estudiante no encontrado');
      this.router.navigate(['/estudiantes']);
    }
  }
  obtenerEstudiantePorId(id: number) {
    // Simula consulta a una API o servicio
    const estudiantes = [
      {
        id_persona: 1,
        nombre: 'Carlos',
        apellido: 'Ramírez',
        fecha_nacimiento: '2005-04-10',
        email: 'carlos.ramirez@example.com',
        telefono: '123456789',
        numero_matricula: 'MAT2023001',
        grado: '10',
      },
      {
        id_persona: 2,
        nombre: 'Laura',
        apellido: 'Gómez',
        fecha_nacimiento: '2004-07-15',
        email: 'laura.gomez@example.com',
        telefono: '987654321',
        numero_matricula: 'MAT2023002',
        grado: '11',
      },
    ];
    return estudiantes.find(p => p.id_persona === id);
  }
  guardarCambios(): void {
    console.log('Estudiante actualizado:', this.estudiante);
    this.router.navigate(['/estudiantes']);
  }
}
