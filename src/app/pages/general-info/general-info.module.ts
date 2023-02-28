import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralInfoRoutingModule } from './general-info-routing.module';
import { GeneralInfoComponent } from './general-info.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GeneralInfoComponent
  ],
  imports: [
    CommonModule,
    GeneralInfoRoutingModule,
    MatButtonToggleModule,
    MatIconModule
  ]
})
export class GeneralInfoModule { }
