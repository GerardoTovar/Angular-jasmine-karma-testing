
import { Routes } from '@angular/router';
import { MedicoComponent } from '../../intermedio2/medico/medico.component';
import { IncrementadorComponent } from '../../intermedio2/incrementador/incrementador.component';


export const RUTAS: Routes = [
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];
