import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintGoalsRoutingModule } from './sprint-goals-routing.module';
import { SprintGoalsComponent } from './sprint-goals.component';


@NgModule({
  declarations: [
    SprintGoalsComponent
  ],
  imports: [
    CommonModule,
    SprintGoalsRoutingModule
  ]
})
export class SprintGoalsModule { }
