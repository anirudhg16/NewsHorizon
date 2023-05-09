import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { NewsApiService } from './services/news-api.service';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechComponent,
    BusinessComponent,
    SportsComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
