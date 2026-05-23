import { Component,model } from '@angular/core';
import { Api } from '../../Service/api';
import { ChartConstructorType } from 'highcharts-angular';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  userCount: number = 0;
  recipeCount: number = 0;
  feedbackCount: number = 0;

   selected = model<Date | null>(null);

  chartOptions: Highcharts.Options = {     chart: {
        type: 'column'
    },
    title: {
        text: 'Corn vs wheat estimated production for 2023'
    },
    subtitle: {
        text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Corn',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
        },
        {
            name: 'Wheat',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
        }
    ] };
  chartConstructor: ChartConstructorType = 'chart';

  constructor(private api: Api) {}

  ngOnInit() {
    this.getCount();
  }

  getCount() {
    this.api.getAdminFeedbacks().subscribe({
      next: (res: any) => {
        this.feedbackCount = res?.length
      },
    });
    this.api.getAdminUsers().subscribe({
      next: (res: any) => {
        this.userCount = res?.length
      },
    });
    this.api.getAdminRecipes().subscribe({
      next: (res: any) => {
        this.recipeCount = res?.length
      },
    });
  }
}
