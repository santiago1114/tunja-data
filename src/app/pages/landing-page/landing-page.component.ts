import { Component, OnInit } from '@angular/core';
import { TableroModel } from 'src/app/models/tablero.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styles: [],
})
export class LandingPageComponent implements OnInit {
  tableros: TableroModel[] = [
    new TableroModel(
      "Dirección de TIC's y gobierno digital",
      'Información pública de la Secretaría de Protección Social, casos de violencia',
      'Para cada barrio de Tunja encuentra el resumen estadístico de los casos de violencia para los dos ultimos años (2020,2021)',
      '/tableros/proteccion-social/casos-violencia'
    ),
    new TableroModel(
      "Dirección de TIC's y gobierno digital",
      'Información pública de la Secretaría de Protección Social, intentos de suicidio',
      'Encuentra el resumen estadístico de los intentos de suicidio para los dos ultimos años (2020,2021) en la ciudad de Tunja',
      '/tableros/proteccion-social/intentos-suicidio'
    ),
    new TableroModel(
      "Dirección de TIC's y gobierno digital",
      'Información pública Instalaciones de Internet - La Conectividad nos Une',
      'Del programa de la Alcaldia de Tunja, la conectividad nos une, se muestran las estadisticas para instalaciones del año 2022',
      '/tableros/direccion-tics/instalaciones-internet'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
