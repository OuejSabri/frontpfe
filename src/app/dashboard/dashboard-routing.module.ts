import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from '../components/calendrier/calendrier.component';

const routes: Routes = [
  {
    path: 'offres',
    loadChildren: () =>
      import('../modules/offres/offres.module').then((m) => m.OffresModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('../modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('../modules/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'evenements',
    component: CalendrierComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
