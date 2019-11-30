import { NgModule }             from '@angular/core';

import { RouterModule, Routes }               from '@angular/router';

import { Compo1Component }      from './components/compo1/compo1.component';
import { Compo2Component }      from './components/compo2/compo2.component';
import { Compo3Component }      from './components/compo3/compo3.component';

const routes:Routes = [
                { path: '', redirectTo: '/com1', pathMatch: 'full'},
                { path: 'com1', component: Compo1Component},
                { path: 'com2', component: Compo2Component},
                { path: 'com3', component: Compo3Component},
                { path: '**', redirectTo: '/com1'}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],    // importo y "configuro" este módulo
  exports: [RouterModule]                     // "ofrezco" este modulo al módulo principal
})

export class AppRoutingModule { }
