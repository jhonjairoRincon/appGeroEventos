import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/evento';
import { EventoService } from '../../services/evento.service'

@Component({
  selector: 'app-editar-eventos',
  templateUrl: './editar-eventos.component.html',
  styleUrls: ['./editar-eventos.component.css']
})
export class EditarEventosComponent implements OnInit {

  eventoForm : FormGroup

  constructor(private fb : FormBuilder, 
              private router: Router,
              private eventoService: EventoService) {

    this.eventoForm = this.fb.group({
      fecha: ['',Validators.required],
      evento: ['', Validators.required],
      clientes: ['', Validators.required]
    })
   }

  ngOnInit(): void {

  }
  agregarEvento(){

    const evento: Evento = {
      fecha: this.eventoForm.get("fecha")?.value,
      evento: this.eventoForm.get("evento")?.value,
      cliente: this.eventoForm.get("clientes")?.value,
    }
    this.eventoService.postEvento(evento)
    .subscribe(
      res=>{
        this.router.navigate(["/eventos"])//directiva para direccionar con la inyeccion de router.
      }
    )
    
  }

}
