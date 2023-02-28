import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './general-info.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralInfoComponent,
    children: [
      {
        path: 'info',
        loadChildren: () =>
          import('@pages/info/info.module').then((m) => m.InfoModule),
      },
      {
        path: 'sprint-goals',
        loadChildren: () =>
          import('@pages/sprint-goals/sprint-goals.module').then(
            (m) => m.SprintGoalsModule
          ),
      },
      {
        path: 'metrics-and-kpis',
        loadChildren: () =>
          import('@pages/metrics-and-kpis/metrics-and-kpis.module').then(
            (m) => m.MetricsAndKpisModule
          ),
      },
      {
        path: 'risk-matrix',
        loadChildren: () =>
          import('@pages/risk-matrix/risk-matrix.module').then(
            (m) => m.RiskMatrixModule
          ),
      },
      {
        path: 'capacity',
        loadChildren: () =>
          import('@pages/capacity/capacity.module').then(
            (m) => m.CapacityModule
          ),
      },
      {
        path: 'release-notes',
        loadChildren: () =>
          import('@pages/release-notes/release-notes.module').then(
            (m) => m.ReleaseNotesModule
          ),
      },
      {
        path: 'updates',
        loadChildren: () =>
          import('@pages/updates/updates.module').then((m) => m.UpdatesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralInfoRoutingModule {}
