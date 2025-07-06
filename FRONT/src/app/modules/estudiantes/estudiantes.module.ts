import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesitas CommonModule para directivas como *ngIf, *ngFor
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { IndexComponent } from './index/index.component';
// import { HttpClientModule } from '@angular/common/http'; // ¡Importa HttpClientModule aquí!

@NgModule({
  declarations: [
    CreateComponent, // Declara el componente
    IndexComponent
  ],
  imports: [
    CommonModule, // Necesario para directivas estructurales (ngIf, ngFor)
    ReactiveFormsModule,
    EstudiantesRoutingModule,
    SharedModule,

    // HttpClientModule // Cada módulo que use HttpClient necesita importarlo
  ],
  exports: [
    // FormularioComponent // Exporta el componente para que pueda ser usado por otros módulos
  ],
})
export class EstudiantesModule {}
