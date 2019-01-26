import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngCharts
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonutComponent } from './components/donut/donut.component';
import { RadarComponent } from './components/radar/radar.component';
import { PieComponent } from './components/pie/pie.component';
import { PolarAreaComponent } from './components/polar-area/polar-area.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarraComponent,
    DonutComponent,
    RadarComponent,
    PieComponent,
    PolarAreaComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
