import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StyleClassModule } from 'primeng/styleclass';
import { PrimeNgModule } from './modules/shared/shared.module';
import { MessageService } from 'primeng/api';
import { ListeEvenementsComponent } from './components/admin/liste-evenements/liste-evenements.component';
import { AjouterCodeComponent } from './components/authentification/ajouter-code/ajouter-code.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from './components/stagiaires/add-education/add-education.component';
import { AddExperienceComponent } from './components/stagiaires/add-experience/add-experience.component';
import { AddCertificatComponent } from './components/stagiaires/add-certificat/add-certificat.component';
import { AddProjetComponent } from './components/stagiaires/add-projet/add-projet.component';
import { AddSkillComponent } from './components/stagiaires/add-skill/add-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEvenementsComponent,
    AjouterCodeComponent,
    AddSkillComponent,
    AddEducationComponent,
    AddExperienceComponent,
    AddCertificatComponent,
    AddProjetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PanelMenuModule,
    SplitterModule,
    StyleClassModule,
    PrimeNgModule,
    MatDialogModule,
    CommonModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
