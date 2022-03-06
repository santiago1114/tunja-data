import { Component, Input, OnInit } from '@angular/core';
import { TableroModel } from 'src/app/models/tablero.model';

@Component({
  selector: 'app-descubre-card',
  templateUrl: './descubre-card.component.html',
  styles: [
  ]
})
export class DescubreCardComponent implements OnInit {

  @Input() tablero !: TableroModel;
  constructor() { }

  ngOnInit(): void {
  }

}

