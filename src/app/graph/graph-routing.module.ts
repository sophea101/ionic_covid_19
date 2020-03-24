import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: 'graph',
    children: [
      { path: 'chart',                   component: ChartComponent },
      // { path: 're-issue-card',
      //   children: [
      //     { path: '',                       component: CAR12841000Component },
      //     { path: 'select-branch',          component: CAR12841100Component },
      //     { path: 'confirm',                component: CAR12842000Component },
      //     { path: 'result',                 component: CAR12843000Component },
      //   ],
      // }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class GraphRouterModule { }