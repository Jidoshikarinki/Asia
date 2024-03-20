import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { CountriesMainComponent } from './countries-main/countries-main.component';
import { MapComponent } from './map/map.component';
import { WarComponent } from './war/war.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WarGeoComponent } from './war-geo/war-geo.component';
import { HomeMain2Component } from './home-main-2/home-main-2.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeMainComponent,
    CountriesMainComponent,
    MapComponent,
    WarComponent,
    AboutusComponent,
    WarGeoComponent,
    HomeMain2Component,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
