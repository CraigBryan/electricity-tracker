import { Injectable }     from '@angular/core';


@Injectable()
export class StatisticsService {
  private dataPointUrl: string = 'api/stats';

  constructor() {}

  MOCK_AVERAGE_USAGE: number = 3.4;
  MOCK_GRAPH_DATA: Object = {
    data: [{
      data: [90, 87, 85.5, 82.5, 79.6, 75.34, 73.01, 70]
    }],
    labels: [
      "May 1", "May 2", "May 3",
      "May 4", "May 5", "May 6",
      "May 7", "May 8"
    ]
  };

  GRAPH_OPTIONS: Object = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
          labelString: 'Currency',
          fontSize: 18
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Date',
          fontSize: 18
        }
      }]
    }
  };

  COLORS: Object = [{ // grey
    backgroundColor: 'rgba(148,159,177,0.0)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }]

  SHOW_LEGEND: boolean = false;

  getAverageDailyUsage(location, startDate, endDate): number {
     return this.MOCK_AVERAGE_USAGE;
  }

  getGraphConfiguration(location): Object {
    var options = this.GRAPH_OPTIONS;
    options['scales']['yAxes'][0]['scaleLabel']['labelString'] = (
      location.getCurrencySymbol()
    );
    return {
      options: options,
      colors: this.COLORS,
      hasLegend: this.SHOW_LEGEND
    };
  }

  getGraphData(location, startDate, endDate): Object {
    var m_data = this.MOCK_GRAPH_DATA;
    m_data["options"] = this.GRAPH_OPTIONS;
    return m_data;
  };
}