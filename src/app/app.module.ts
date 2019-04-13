import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempeHeadersComponent } from './tempe-headers/tempe-headers.component';
import { TempeContentLandingComponent } from './tempe-content-landing/tempe-content-landing.component';
import { TempeFootersComponent } from './tempe-footers/tempe-footers.component';
import { TempeCarouselImageSliderComponent } from './tempe-carousel-image-slider/tempe-carousel-image-slider.component';

@NgModule({
   declarations: [
      AppComponent,
      TempeHeadersComponent,
      TempeContentLandingComponent,
      TempeFootersComponent,
      TempeCarouselImageSliderComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CollapseModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
