import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  statut : Boolean;
  constructor() { }

  ngOnInit() {
    this.statut = true;
  }

  switchStatut() : void
  {
    this.statut = !this.statut;
  }

}
