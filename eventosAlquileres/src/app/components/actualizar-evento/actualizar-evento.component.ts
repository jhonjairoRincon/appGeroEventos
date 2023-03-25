import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventoService } from '../../services/evento.service'
//import { EventosComponent } from  '../eventos/eventos.component'


@Component({
  selector: 'app-actualizar-evento',
  templateUrl: './actualizar-evento.component.html',
  styleUrls: ['./actualizar-evento.component.css']
})
export class ActualizarEventoComponent implements OnInit {

  eventos: Evento = new Evento('', '', '',)

  // eventoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private eventoService: EventoService,
    private activateRoute: ActivatedRoute) {

    // this.eventoForm = this.fb.group({
    //   fecha: ['', Validators.required],
    //   evento: [''],
    //   clientes: ['']
    // })
  }


  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get("id");
    this.filtrarEvento(id)
    console.log(this.eventos)
  }

  actualizarEvento() {


    this.eventoService.putEventos(this.eventos._id, this.eventos)
      .subscribe(
        res => {

          this.router.navigate(["/eventos"])
        }
      )

  }
  filtrarEvento(id: any) {
    this.activateRoute.params.subscribe(
      even => {
        let id = even['id'];
      }
    )
    this.eventoService.getEvento(id)
      .subscribe(
        res => {
          this.eventos._id = id
          this.eventos.cliente = res.cliente
          this.eventos.evento = res.evento
          let fechaf = res.fecha.slice(0, 10)
          this.eventos.fecha = fechaf


        }, error => { console.log(error) }

      )
  }

}
