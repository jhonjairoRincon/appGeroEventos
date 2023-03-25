import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Evento } from '../models/evento'
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url: String = "http://localhost:3000/api/"

  constructor(private http: HttpClient, private router: Router) { }

  postEvento(evento: Evento): Observable<any> {
    return this.http.post<Evento>(this.url + 'eventos', evento);
  }

  getEventos() {
    return this.http.get<Evento>(this.url + 'eventos')

  }
  getEvento(id: String) {
    return this.http.get<Evento>(this.url + 'Eventos/' + id)
  }
  putEventos(id: any, evento: Evento): Observable<any> {
    return this.http.put<Evento>(this.url + 'eventos/' + id, evento)
  }
  deleteEvento(id: String): Observable<any> {

    return this.http.delete<Evento>(this.url + 'eventos/' + id)
  }
}
