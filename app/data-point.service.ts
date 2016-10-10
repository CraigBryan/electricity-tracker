import { Injectable }     from '@angular/core';

import { DataPoint }      from './data-point';

@Injectable()
export class DataPointService {
  private dataPointUrl = 'api/datapoints'

  constructor() {}

  STATIC_DATA_POINTS: DataPoint[] = [
      { id: 11, isTopUp: false, date: new Date(1475615462000), balance: 1 },
      { id: 12, isTopUp: true, date: new Date(1475615462000), balance: 1 },
      { id: 13, isTopUp: false, date: new Date(1475615462000), balance: 1 },
      { id: 14, isTopUp: false, date: new Date(1475615462000), balance: 1 },
      { id: 15, isTopUp: false, date: new Date(1474324234), balance: 1 },
      { id: 16, isTopUp: false, date: new Date(1475615462), balance: 1 },
      { id: 17, isTopUp: false, date: new Date(1475615462), balance: 1 },
      { id: 18, isTopUp: false, date: new Date(1475615462), balance: 1 },
      { id: 19, isTopUp: false, date: new Date(1475615462), balance: 1 },
      { id: 20, isTopUp: false, date: new Date(1475615462), balance: 99 }
    ];

  getDataPoint() {

  }

  getDataPoints() {

  }

  create() {

  }

  update() {

  }

  delete() {

  }
}