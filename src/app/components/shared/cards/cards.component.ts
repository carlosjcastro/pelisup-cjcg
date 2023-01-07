import { Component, Input, OnInit } from '@angular/core';
import { movies_series } from 'src/interfaces/movies_series';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() name!:string;
@Input() image!:string;
@Input() rating!:number;

  constructor() { }

  ngOnInit(): void {
  }

}