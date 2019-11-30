export class Cancion {

    codigo:number;
    titulo:string;
    autor:string;
    explicita:boolean;
    release:Date;

    constructor(codigo:number, titulo:string, autor:string, explicita:boolean, release:Date) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.explicita = explicita;
        this.release = release;

    }
}