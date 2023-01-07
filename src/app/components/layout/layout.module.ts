import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RoutesModule } from '../routes/routes.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    
  ],

  imports: [
    CommonModule,
    RoutesModule,
    AppRoutingModule,
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
  ]

})

export class LayoutModule { }
