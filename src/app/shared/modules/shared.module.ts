import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryNavBarComponent } from '@shared/components/primary-nav-bar/primary-nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MainComponentComponent } from '@shared/components/main-component/main-component.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from '@shared/components/doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { EmployeeTableComponent } from '../components/employee-table/employee-table.component';
import { CustomDatePipe } from '@pipes';


@NgModule({
  imports: [CommonModule, MatIconModule, RouterModule, NgChartsModule],
  declarations: [
    PrimaryNavBarComponent,
    MainComponentComponent,
    DoughnutChartComponent,
    BarChartComponent,
    EmployeeTableComponent,
    CustomDatePipe,

  ],
  exports: [
    PrimaryNavBarComponent,
    MainComponentComponent,
    DoughnutChartComponent,
    BarChartComponent,
    EmployeeTableComponent,
    CustomDatePipe,
  ],
  providers: [
    {
      provide: NgChartsConfiguration,
      useValue: { generateColors: false },
    },
  ],
})
export class SharedModule {}
