import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesitas CommonModule para directivas como *ngIf, *ngFor
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { PersonasRoutingModule } from './personas-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../../shared/shared.module';
import { EditComponent } from './edit/edit.component';
// import { HttpClientModule } from '@angular/common/http'; // ¡Importa HttpClientModule aquí!


@NgModule({
  declarations: [
    CreateComponent, // Declara el componente
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule, // Necesario para directivas estructurales (ngIf, ngFor)
    ReactiveFormsModule, 
    PersonasRoutingModule,
    SharedModule
    // HttpClientModule // Cada módulo que use HttpClient necesita importarlo
  ],
  exports: [
    // FormularioComponent // Exporta el componente para que pueda ser usado por otros módulos
  ]
})
export class PersonasModule { }