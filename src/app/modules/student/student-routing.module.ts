import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from 'src/app/components/stagiaires/feedback/feedback.component';
import { CVComponent } from 'src/app/components/stagiaires/cv/cv.component';
import { MesCandidaturesComponent } from 'src/app/components/stagiaires/mes-candidatures/mes-candidatures.component';
import { ProfilComponent } from 'src/app/components/stagiaires/profil/profil.component';
import { SuiviCandidatureComponent } from 'src/app/components/stagiaires/suivi-candidature/suivi-candidature.component';
import { AcceuilComponent } from 'src/app/pages/acceuil/acceuil.component';
import { PostulerComponent } from 'src/app/components/stagiaires/postuler/postuler.component';
import { ParcourDeStageComponent } from 'src/app/components/stagiaires/parcour-de-stage/parcour-de-stage.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent,
  },
  {
    path: 'offre/:id',
    component: PostulerComponent,
  },
  {
    path : 'parcoursStage',
    component: ParcourDeStageComponent,
  },
  {
    path: 'profil',
    component: ProfilComponent,
  },
  {
    path: 'cv',
    component: CVComponent,
  },
  {
    path: 'mes-candidatures',
    component: MesCandidaturesComponent,
  },
  {
    path: 'SuiviCandidature',
    component: SuiviCandidatureComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'offres',
    loadChildren: () =>
      import('../offres/offres.module').then((m) => m.OffresModule),
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
