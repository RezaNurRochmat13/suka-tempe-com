import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempeHeadersComponent } from './tempe-headers/tempe-headers.component';
import { TempeContentLandingComponent } from './tempe-content-landing/tempe-content-landing.component';
import { TempeFootersComponent } from './tempe-footers/tempe-footers.component';

@NgModule({
   declarations: [
      AppComponent,
      TempeHeadersComponent,
      TempeContentLandingComponent,
      TempeFootersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
