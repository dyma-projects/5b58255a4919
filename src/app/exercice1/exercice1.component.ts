import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit 
{
  names : String[] = ["DUPONT", "DUBOIS", "MARC", "LAMBERT"]
  index : any;
  lastName : String;
  alignment : String;
  couleur : String;
  constructor() { }



  switchLastName() : void
  {
    if ((!this.lastName) || (this.index > this.names.length - 2))
    {
      this.index = 0;
    }
    else
    {
      this.index = this.index + 1;
    }

    this.lastName = this.names[this.index];
  }

  ngOnInit() {
    this.index = 0;
    this.switchLastName();
    this.alignment = "center";
    this.couleur = "blue";
  }

}
