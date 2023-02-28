import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ITotalHours } from '@interfaces';
import { getColors } from '@utils';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) public chart: any;
  @Input() totalHours: ITotalHours;
  @Input() tags: string[];

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Total hours',
        font: {
          size: 22,
          family: 'Arial',
        },
      },
      legend: {
        position: 'bottom',
      },
    },
  };
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        borderWidth: 1,
        backgroundColor: [],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {
    this.getColorsOfEachTag();
    this.doughnutChartData.labels = this.tags;
    this.doughnutChartData.datasets[0].data = Object.values(this.totalHours);
  }

  private getColorsOfEachTag() {
    for (const tag of this.tags) {
      (this.doughnutChartData.datasets[0].backgroundColor as string[]).push(
        getColors(tag)
      );
    }
  }
}
