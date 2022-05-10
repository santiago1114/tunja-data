import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PagesComponent } from './pages/pages.component';
import { PreguntasFrecComponent } from './pages/preguntas-frec/preguntas-frec.component';
import { TableroISuicidiosComponent } from './pages/tablero-i-suicidios/tablero-i-suicidios.component';
import { TableroInstalacionesComponent } from './pages/tablero-instalaciones/tablero-instalaciones.component';
import { TableroViolenciaComponent } from './pages/tablero-violencia/tablero-violencia.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'inicio', component: LandingPageComponent },
      { path: 'preguntasfrecuentes', component: PreguntasFrecComponent, data: {animation: 'PreguntasPage'} },
      { path: 'tableros/proteccion-social/intentos-suicidio', component: TableroISuicidiosComponent },
      { path: 'tableros/proteccion-social/casos-violencia', component: TableroViolenciaComponent },
      { path: 'tableros/direccion-tics/instalaciones-internet', component: TableroInstalacionesComponent },
      { path: '', pathMatch: 'full', redirectTo: 'inicio', data: {animation: 'InicioPage'} },
    ]
  },
  { path: '**', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
