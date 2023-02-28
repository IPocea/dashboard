import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsAndKpisComponent } from './metrics-and-kpis.component';

const routes: Routes = [{ path: '', component: MetricsAndKpisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricsAndKpisRoutingModule { }
