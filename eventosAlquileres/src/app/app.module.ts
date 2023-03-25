import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IntercerptorService } from './services/intercerptor.service';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AlquileresComponent } from './components/alquileres/alquileres.component';
import { EditarEventosComponent } from './components/editar-eventos/editar-Evento.component';
import { EditarAlquileresComponent } from './components/editar-alquileres/editar-alquileres.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ActualizarEventoComponent } from './components/actualizar-evento/actualizar-evento.component';
import { DatePipe } from '@angular/common';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    AlquileresComponent,
    EditarEventosComponent,
    EditarAlquileresComponent,
    NavbarComponent,
    SingInComponent,
    SingUpComponent,
    ActualizarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  //necesario para trabajar con formularios
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    //ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercerptorService,
      multi: true
    },
    {
      provide:  LOCALE_ID,
      useValue:'es'
        
    }],
    
    
  bootstrap: [AppComponent]
})
export class AppModule { }
