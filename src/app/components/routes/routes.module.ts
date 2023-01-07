import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    LoginComponent,
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    
  ],

})
export class RoutesModule { }
