import { Component, OnInit } from '@angular/core';
import { EventoService } from "../../services/evento.service";
import { Evento } from "../../models/evento"
import { Router } from '@angular/router'

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento = {
    cliente: '',
    fecha: '',
    evento: ''
  }
  data: any = []
  constructor(private eventoService: EventoService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerEvento()

  }
  obtenerEvento() {
    this.eventoService.getEventos()
      .subscribe(
        res => {

          this.eventos = res

          this.data = Object.values(this.eventos)
          this.data.forEach((e: { fecha: any; }) => {
            let fecha = e.fecha.toString().slice(0, 10)
            e.fecha = fecha
          });
        }, err => { console.log(err) }
      )

  }

  deleteEvento(id: String) {
    this.eventoService.deleteEvento(id)
      .subscribe(
        res => {
          this.obtenerEvento()
          console.log("eliminado")
        }, error => { console.log(error) }

      )
  }


}


