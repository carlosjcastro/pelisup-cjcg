import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    CardsComponent,
    SearchBarComponent,
    FilterPipe
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports:[CardsComponent, SearchBarComponent, FilterPipe],

})
export class SharedModule { }