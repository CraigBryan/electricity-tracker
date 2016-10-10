import { Injectable } from '@angular/core';

import { Location } from './location';

@Injectable()
export class LocationService {
  currentLocation: Object;

  constructor() {
      this.currentLocation = this.STATIC_LOCATION;
  }

  STATIC_LOCATION: Location = new Location(
      1, 'EUR', '44 Glenveagh Court'
  );
}