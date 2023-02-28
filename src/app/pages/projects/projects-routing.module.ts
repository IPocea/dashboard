import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'general-info',
        loadChildren: () =>
          import('@pages/general-info/general-info.module').then(
            (m) => m.GeneralInfoModule
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('@pages/requests/requests.module').then(
            (m) => m.RequestsModule
          ),
      },
      {
        path: 'stakeholders',
        loadChildren: () =>
          import('@pages/stakeholders/stakeholders.module').then(
            (m) => m.StakeholdersModule
          ),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('@pages/team/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'files',
        loadChildren: () =>
          import('@pages/files/files.module').then((m) => m.FilesModule),
      },
      {
        path: 'budget',
        loadChildren: () =>
          import('@pages/budget/budget.module').then((m) => m.BudgetModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
