import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgModule } from '../shared/shared.module';
import { AcceuilAdminComponent } from 'src/app/components/admin/acceuil-admin/acceuil-admin.component';
import { NosEntreprisesComponent } from 'src/app/components/admin/liste-entreprises/nos-entreprises.component';
import { NosStagiairesComponent } from 'src/app/components/admin/liste-stagiaires/nos-stagiaires.component';
import { ListeFeedbacksComponent } from 'src/app/components/admin/liste-feedbacks/liste-feedbacks.component';
import { ProfilComponent } from 'src/app/components/admin/profil/profil.component';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AcceuilAdminComponent,
    ListeFeedbacksComponent,
    NosEntreprisesComponent,
    NosStagiairesComponent,
    ProfilComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, PrimeNgModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
