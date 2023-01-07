import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { MoviesComponent } from './components/routes/movies/movies.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { LoginComponent } from './components/routes/login/login.component';



const routes: Routes = [

  {

    path:'home', component: HomeComponent},

    {
      path:'movies', component: MoviesComponent},
    
{
    path:'series', component: SeriesComponent},

{
  path:'login', component:LoginComponent},

  {
    path:'**',
    redirectTo: 'home'
  },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
