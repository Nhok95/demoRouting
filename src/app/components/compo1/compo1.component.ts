import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancionService } from 'src/app/services/cancion.service';
import { Cancion } from 'src/app/model/cancion';

/*
const CANCIONES:Cancion[] {

}*/

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {

  constructor(private router: Router, private cancionService: CancionService) { }

  cancion:Cancion = undefined;
  canciones:Cancion[] = undefined;

  ngOnInit() {
    this.cancion = this.cancionService.read(100);
  }

  navegar():void{
    console.log("nos vamos al componente 3!");
    this.router.navigateByUrl('com3');

  }

}
