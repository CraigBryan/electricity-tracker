import { Component, Input } from '@angular/core';

import { StatisticsService } from '../statistics.service'
import { LocationService } from '../location.service'

@Component({
  selector: 'et-stats',
  templateUrl: 'app/statistics/statistics.component.html',
  styleUrls: ['app/statistics/statistics.component.css']
})
export class StatisticsComponent {
  periodDays: number;
  averageUsage: number;
  currType: string;

  public periods = [
    { value: 7, display: '1 Week' },
    { value: 14, display: '2 Weeks' },
    { value: 30, display: '1 Month' },
  ];

  constructor(
    private statsService: StatisticsService,
    private locationService: LocationService
  ) {
    this.periodDays = this.periods[0].value;
  }

  ngOnInit(): void {
    this.averageUsage = this.statsService.getAverageDailyUsage(
      true, true, true
    );
    this.currType = this.locationService.currentLocation['currency']
  }
}
