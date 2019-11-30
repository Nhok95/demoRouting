import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { Compo1Component } from './components/compo1/compo1.component';
import { Compo2Component } from './components/compo2/compo2.component';
import { Compo3Component } from './components/compo3/compo3.component';

//Services
import { CancionService } from './services/cancion.service';


@NgModule({
  declarations: [
    AppComponent,
    Compo1Component,         
    Compo2Component,
    Compo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CancionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
