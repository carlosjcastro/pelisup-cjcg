import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

}
