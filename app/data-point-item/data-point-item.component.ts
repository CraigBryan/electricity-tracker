import { Component, Input } from '@angular/core';

import { LocationService } from '../location.service'

import { DataPoint } from '../data-point';

@Component({
  selector: '[et-dataPoint]',
  templateUrl: 'app/data-point-item/data-point-item.component.html',
  styleUrls: ['app/data-point-item/data-point-item.component.css']
})
export class DataPointItemComponent {
  @Input() dataPoint: DataPoint;
  currType: string;
  isTopUpString: string;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.currType = this.locationService.currentLocation['currency'];
    if (this.dataPoint.isTopUp) {
      this.isTopUpString = 'Yes';
    }
    else {
      this.isTopUpString = 'No';
    }
  }
}
