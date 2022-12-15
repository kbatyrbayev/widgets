import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WidgetHeaderComponent} from './components/widget-header/widget-header.component';
import {WidgetFirstComponent} from './widgets/widget-first/widget-first.component';
import {WidgetSecondComponent} from './widgets/widget-second/widget-second.component';
import {WidgetThirdComponent} from './widgets/widget-third/widget-third.component';
import {WidgetFourthComponent} from './widgets/widget-fourth/widget-fourth.component';
import {MapComponent} from './components/map/map.component';
import {MonthRangeComponent} from './components/month-range/month-range.component';
import {HttpClientModule} from "@angular/common/http";
import { DonutComponent } from './components/donut/donut.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetHeaderComponent,
    WidgetFirstComponent,
    WidgetSecondComponent,
    WidgetThirdComponent,
    WidgetFourthComponent,
    MapComponent,
    MonthRangeComponent,
    DonutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
