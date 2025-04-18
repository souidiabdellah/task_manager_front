import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
     HttpClientModule,
     AppComponent,
     RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: []
})
export class AppModule { }