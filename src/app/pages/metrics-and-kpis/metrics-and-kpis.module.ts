import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetricsAndKpisRoutingModule } from './metrics-and-kpis-routing.module';
import { MetricsAndKpisComponent } from './metrics-and-kpis.component';


@NgModule({
  declarations: [
    MetricsAndKpisComponent
  ],
  imports: [
    CommonModule,
    MetricsAndKpisRoutingModule
  ]
})
export class MetricsAndKpisModule { }
