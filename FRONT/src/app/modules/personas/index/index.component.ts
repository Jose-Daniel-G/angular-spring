import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  personas = [
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
    // Puedes añadir más personas
  ];

  currentPage = 1;
  itemsPerPage = 10;

  get paginatedPersonas() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.personas.slice(start, start + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  eliminarPersona(id: number) {
    if (confirm('¿Estás seguro de eliminar esta persona?')) {
      this.personas = this.personas.filter(p => p.id_persona !== id);
    }
  }
}
