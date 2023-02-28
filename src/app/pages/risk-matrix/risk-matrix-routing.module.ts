import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiskMatrixComponent } from './risk-matrix.component';

const routes: Routes = [{ path: '', component: RiskMatrixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskMatrixRoutingModule { }
