import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  estudiantes = [
    {
      id_persona: 1,
      nombre: 'Carlos',
      apellido: 'Ramírez',
      email: 'carlos.ramirez@example.com',
      telefono: '123456789',
      numero_matricula: 'MAT2023001',
      grado: '10°'
    },
    {
      id_persona: 2,
      nombre: 'Laura',
      apellido: 'Gómez',
      email: 'laura.gomez@example.com',
      telefono: '987654321',
      numero_matricula: 'MAT2023002',
      grado: '11°'
    }
    // Puedes agregar más registros
  ];

  currentPage = 1;
  itemsPerPage = 10;

  get paginatedEstudiantes() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.estudiantes.slice(start, start + this.itemsPerPage);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  eliminarEstudiante(id: number) {
    if (confirm('¿Deseas eliminar este estudiante?')) {
      this.estudiantes = this.estudiantes.filter(e => e.id_persona !== id);
    }
  }
}
