import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import { AlquileresComponent } from './components/alquileres/alquileres.component';
import { EditarAlquileresComponent } from './components/editar-alquileres/editar-alquileres.component';
import { EditarEventosComponent } from './components/editar-eventos/editar-Evento.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

import { AuthGuard } from './auth.guard'
import { ActualizarEventoComponent } from './components/actualizar-evento/actualizar-evento.component';


const routes: Routes = [
  {path: '', redirectTo: 'singIn', pathMatch: 'full' },
  {path: 'singIn', component: SingInComponent },
  {path: 'singUp', component: SingUpComponent },
  {path: 'eventos', component: EventosComponent, canActivate: [ AuthGuard] },
  {path: 'crearEventos', component: EditarEventosComponent },
  {path: 'actualizarEventos/:id', component: ActualizarEventoComponent },
  {path: 'crearAlquileres', component: EditarAlquileresComponent },
  {path: 'editarAlquileres:id', component: EditarAlquileresComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
