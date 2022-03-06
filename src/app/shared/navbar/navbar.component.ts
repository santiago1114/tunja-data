import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  @Output() tablerosBtn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  tableroBtnEmit(){
    this.tablerosBtn.emit();
  }

}
