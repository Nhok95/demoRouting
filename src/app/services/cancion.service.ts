import {Cancion} from '../model/cancion'
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class CancionService{

    getAll():Cancion[] {
        return null;
    }

    create(cancion:Cancion):void {

    }

    read(codigo:number):Cancion {

        return new Cancion(codigo, "Despacito", "Pedro Perales", true, new Date());
    }
}