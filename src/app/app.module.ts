import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidnavComponent } from './sidnav/sidnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidnavComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
