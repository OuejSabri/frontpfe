import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from 'src/app/components/stagiaires/profil/profil.component';
import { CVComponent } from 'src/app/components/stagiaires/cv/cv.component';
import { StudentRoutingModule } from './student-routing.module';
import { MesCandidaturesComponent } from 'src/app/components/stagiaires/mes-candidatures/mes-candidatures.component';
import { AcceuilComponent } from 'src/app/pages/acceuil/acceuil.component';
import { PrimeNgModule } from '../shared/shared.module';
import { SuiviCandidatureComponent } from 'src/app/components/stagiaires/suivi-candidature/suivi-candidature.component';
import { FeedbackComponent } from 'src/app/components/stagiaires/feedback/feedback.component';
import { PostulerComponent } from 'src/app/components/stagiaires/postuler/postuler.component';
import { ParcourDeStageComponent } from 'src/app/components/stagiaires/parcour-de-stage/parcour-de-stage.component';
import { CdkDrag, CdkDropList, DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AcceuilComponent,
    ProfilComponent,
    CVComponent,
    MesCandidaturesComponent,
    SuiviCandidatureComponent,
    FeedbackComponent,
    PostulerComponent,
    ParcourDeStageComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeNgModule,
    CdkDrag,
    CdkDropList,
    DragDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentModule {}
