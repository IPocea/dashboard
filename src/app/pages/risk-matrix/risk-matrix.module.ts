import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskMatrixRoutingModule } from './risk-matrix-routing.module';
import { RiskMatrixComponent } from './risk-matrix.component';


@NgModule({
  declarations: [
    RiskMatrixComponent
  ],
  imports: [
    CommonModule,
    RiskMatrixRoutingModule
  ]
})
export class RiskMatrixModule { }
