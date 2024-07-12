import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwiperComponent } from './swiper/swiper.component';
import { NgxSliderModule } from 'ngx-slider-v2';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
