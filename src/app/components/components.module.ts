import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescubreCardComponent } from './descubre-card/descubre-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DescubreCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DescubreCardComponent]
})
export class ComponentsModule { }
