import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Widget1Component } from './widgets/widget1/widget1.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { Widget2Component } from './widgets/widget2/widget2.component';
import { Widget3Component } from './widgets/widget3/widget3.component';
import { Widget4Component } from './widgets/widget4/widget4.component';
import { Widget5Component } from './widgets/widget5/widget5.component';
import { Widget6Component } from './widgets/widget6/widget6.component';
import { WidgetFirstComponent } from './widgets/widget-first/widget-first.component';
import { WidgetSecondComponent } from './widgets/widget-second/widget-second.component';
import { WidgetThirdComponent } from './widgets/widget-third/widget-third.component';
import { WidgetFourthComponent } from './widgets/widget-fourth/widget-fourth.component';
import { MapComponent } from './components/map/map.component';
import { MonthRangeComponent } from './components/month-range/month-range.component';

@NgModule({
  declarations: [
    AppComponent,
    Widget1Component,
    WidgetHeaderComponent,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    Widget6Component,
    WidgetFirstComponent,
    WidgetSecondComponent,
    WidgetThirdComponent,
    WidgetFourthComponent,
    MapComponent,
    MonthRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
