import { transition } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

// -------- BUSCADOR DE PELÍCULAS Y SERIES FUNCIONAL --------
  transform(value: any, arg: any): any {
      const resultCard = [];
      for (const movies_series of value) {
          if (movies_series.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
             resultCard.push(movies_series);

          };
      };
      return resultCard;
  }
}
