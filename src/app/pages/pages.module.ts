import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module';
import { TableroViolenciaComponent } from './tablero-violencia/tablero-violencia.component';
import { TableroISuicidiosComponent } from './tablero-i-suicidios/tablero-i-suicidios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    TableroViolenciaComponent,
    TableroISuicidiosComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    LandingPageComponent,
    TableroViolenciaComponent,
    TableroISuicidiosComponent
  ],
})
export class PagesModule { }
