export class Evento {
    _id?: String;
    cliente: String;
    fecha: String;
    evento: String;

    constructor(fecha: String, evento: String,cliente: String){
        this.fecha = fecha,
        this.evento = evento,
        this.cliente = cliente
    }
}

