import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';
import { SharedModule } from '@shared/modules/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CapacityComponent
  ],
  imports: [
    CommonModule,
    CapacityRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
  ]
})
export class CapacityModule { }
