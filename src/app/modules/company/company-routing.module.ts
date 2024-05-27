import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesOffresComponent } from 'src/app/components/entreprise/mes-offres/mes-offres.component';
import { ProfilSocieteComponent } from 'src/app/components/entreprise/profil-societe/profil-societe.component';
import { AcceuilComponent } from 'src/app/pages/acceuilCompany/acceuil.component';
import { ListeCandidaturesComponent } from 'src/app/components/entreprise/liste-candidatures/liste-candidatures.component';
import { PublierComponent } from 'src/app/components/entreprise/publier/publier.component';
import { ListeTachesComponent } from 'src/app/components/entreprise/liste-taches/liste-taches.component';
import { DetailOffreComponent } from 'src/app/components/entreprise/detail-offre/detail-offre.component';
import { ListeCandidatureAccepteComponent } from 'src/app/components/entreprise/liste-candidature-accepte/liste-candidature-accepte.component';
import { ListeStagiaireComponent } from 'src/app/components/entreprise/liste-stagiaire/liste-stagiaire.component';
const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
  },

  {
    path: 'profil-societe',
    component: ProfilSocieteComponent,
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('../offres/offres.module').then((m) => m.OffresModule),
  },
  {
    path: 'liste-candidatures',
    component: ListeCandidaturesComponent,
  },
  {path:'liste-stagiaires',
    component: ListeStagiaireComponent 
  },
  {
    path: 'liste-candidatures-accepte',
    component: ListeCandidatureAccepteComponent,
  },
  {
    path: 'liste-taches/:id',
    component: ListeTachesComponent,
  },
  {
    path: 'offres/add',
    component: PublierComponent,
  },
  {
    path: 'offre/:id',
    component: DetailOffreComponent,
  },
  {
    path: 'mes-offres',
    component: MesOffresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
