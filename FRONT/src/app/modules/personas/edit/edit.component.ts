import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  personaId!: number;
  persona = {
    id_persona: 0,
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    email: '',
    telefono: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.personaId = Number(this.route.snapshot.paramMap.get('id'));

    // Simulación de datos traídos del backend
    const personaEncontrada = this.obtenerPersonaPorId(this.personaId);
    if (personaEncontrada) {
      this.persona = { ...personaEncontrada };
    } else {
      alert('Persona no encontrada');
      this.router.navigate(['/personas']);
    }
  }

  obtenerPersonaPorId(id: number) {
    // Simula consulta a una API o servicio
    const personas = [
      {
        id_persona: 1,
        nombre: 'Luis',
        apellido: 'Martínez',
        fecha_nacimiento: '1990-04-15',
        email: 'luis.martinez@example.com',
        telefono: '123456789'
      },
      {
        id_persona: 2,
        nombre: 'María',
        apellido: 'Lopez',
        fecha_nacimiento: '1985-07-22',
        email: 'maria.lopez@example.com',
        telefono: '987654321'
      }
    ];

    return personas.find(p => p.id_persona === id);
  }

  actualizarPersona() {
    console.log('Persona actualizada:', this.persona);
    // Aquí llamarías a un servicio real
    this.router.navigate(['/personas']);
  }
}
