import { Component, Input } from '@angular/core';

import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

import { StatisticsService } from '../statistics.service'
import { LocationService } from '../location.service'

@Component({
  selector: 'et-stats-graph',
  templateUrl: 'app/stats-graph/stats-graph.component.html',
  styleUrls: ['app/stats-graph/stats-graph.component.css'],
  directives: [CHART_DIRECTIVES]
})
export class StatsGraphComponent {
  graphData: Object;
  graphConfig: Object;
  location: Location;

  constructor(
    private statsService: StatisticsService,
    private locationService: LocationService
  ) {
    this.location = locationService.currentLocation;
  }

  ngOnInit(): void {
    this.graphData = this.statsService.getGraphData(true, true, true);
    this.graphConfig = this.statsService.getGraphConfiguration(this.location);
  }
}