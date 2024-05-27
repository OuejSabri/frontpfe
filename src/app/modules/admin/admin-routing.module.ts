import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeFeedbacksComponent } from 'src/app/components/admin/liste-feedbacks/liste-feedbacks.component';
import { NosEntreprisesComponent } from 'src/app/components/admin/liste-entreprises/nos-entreprises.component';
import { NosStagiairesComponent } from 'src/app/components/admin/liste-stagiaires/nos-stagiaires.component';
import { AcceuilAdminComponent } from 'src/app/components/admin/acceuil-admin/acceuil-admin.component';
import { ProfilComponent } from 'src/app/components/admin/profil/profil.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: AcceuilAdminComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'liste-stagiaires',
    component: NosStagiairesComponent,
  },
  {
    path: 'liste-societes',
    component: NosEntreprisesComponent,
  },
  {
    path: 'liste-feedbacks',
    component: ListeFeedbacksComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
