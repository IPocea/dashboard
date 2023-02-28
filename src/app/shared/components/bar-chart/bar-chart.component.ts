import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IHoursPerDay } from '@interfaces';
import { getColors } from '@utils';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() hoursPerDay: IHoursPerDay[];
  @Input() tags: string[];
  @Input() dates: string[];

  public barChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Hours',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [],
  };
  designHours: number[] = [];
  programmingHours: number[] = [];
  networksHours: number[] = [];
  othersHours: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setCharData();
  }

  

  private setCharData(): void {
    this.barChartData.labels = this.dates;
    for (let i = 0; i < this.tags.length; i++) {
      this.barChartData.datasets.push({
        data: [],
        backgroundColor: [getColors(this.tags[i])],
        label: this.tags[i]
      });
      for (let j = 0; j < this.dates.length; j++) {
        this.barChartData.datasets[i].data.push(
          this.hoursPerDay[j].totalHours[`${this.tags[i].toLowerCase()}`]
        );
      }
    }
  }
}
