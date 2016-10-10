import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { DataPointItemComponent } from './data-point-item/data-point-item.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatsGraphComponent } from './stats-graph/stats-graph.component';

import { DataPointService } from './data-point.service'
import { LocationService } from './location.service'
import { StatisticsService } from './statistics.service'


@NgModule({
  declarations: [
    AppComponent,
    BalanceSheetComponent,
    DataPointItemComponent,
    StatisticsComponent,
    StatsGraphComponent,
    BalanceSheetComponent,
    DataPointItemComponent,
    StatisticsComponent,
    StatsGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    ChartsModule
  ],
  providers: [
    DataPointService,
    LocationService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
