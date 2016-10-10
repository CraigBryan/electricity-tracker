import { Component } from '@angular/core';

import { DataPointService } from '../data-point.service';
import { LocationService } from '../location.service';

import { DataPoint } from '../data-point';

@Component({
  selector: 'et-balance-sheet',
  templateUrl: 'app/balance-sheet/balance-sheet.component.html',
  styleUrls: ['app/balance-sheet/balance-sheet.component.css']
})
export class BalanceSheetComponent {
  dataPoints: DataPoint[];
  currType: String;

  headers: string[] = ['Date', 'Time', 'Reading', 'Top-Up?', '']

  constructor(
    private dataService: DataPointService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.dataPoints = this.dataService.STATIC_DATA_POINTS;
    this.currType = this.locationService.currentLocation['currency'];
  }
}
