import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SprintGoalsComponent } from './sprint-goals.component';

const routes: Routes = [{ path: '', component: SprintGoalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintGoalsRoutingModule { }
