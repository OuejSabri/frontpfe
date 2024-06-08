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
import { AddSkillComponent } from 'src/app/components/stagiaires/add-skill/add-skill.component';
import { AddEducationComponent } from 'src/app/components/stagiaires/add-education/add-education.component';
import { AddExperienceComponent } from 'src/app/components/stagiaires/add-experience/add-experience.component';
import { AddCertificatComponent } from 'src/app/components/stagiaires/add-certificat/add-certificat.component';
import { AddProjetComponent } from 'src/app/components/stagiaires/add-projet/add-projet.component';
import { InputTextModule } from 'primeng/inputtext';
import { ListeFeedbacksComponent } from 'src/app/components/stagiaires/liste-feedbacks/liste-feedbacks.component';
import { ListeSocieteComponent } from 'src/app/components/stagiaires/liste-societe/liste-societe.component';

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
    AddSkillComponent,
    AddEducationComponent,
    AddExperienceComponent,
    AddCertificatComponent,
    AddProjetComponent,
    ListeFeedbacksComponent,
    ListeSocieteComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    PrimeNgModule,
    CdkDrag,
    CdkDropList,
    DragDropModule,
    InputTextModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StudentModule {}
