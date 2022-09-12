import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Widget1Component } from './widgets/widget1/widget1.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Widget1Component,
    WidgetHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
