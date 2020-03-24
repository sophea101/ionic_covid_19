import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartComponent } from './chart/chart.component';
import {GraphRouterModule } from './graph-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphRouterModule

  ],
  declarations: [
    ChartComponent
  ],
  entryComponents: [
    ChartComponent
  ]
})
export class GraphPageModule {}
