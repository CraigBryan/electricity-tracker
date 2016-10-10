import { Component } from '@angular/core';

import { LocationService } from './location.service'

@Component({
  selector: 'et-app',
  template: `
      <div class="pure-g">
        <h1 class="pure-u-1 centered">{{location.name}}</h1>
        <et-stats class="pure-u-lg-1-2 pure-u-1"></et-stats>
        <et-balance-sheet class="pure-u-lg-1-2 pure-u-1"></et-balance-sheet>
      </div>
  `
})
export class AppComponent {
  location: Object;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.location = this.locationService.currentLocation;
  }
}
