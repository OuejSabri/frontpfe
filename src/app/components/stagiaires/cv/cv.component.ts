import { Component, OnInit } from '@angular/core';
import { CertificationService } from 'src/app/services/certification.service';
import { EducationService } from 'src/app/services/education.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProjetService } from 'src/app/services/projet.service';
import { SkillService } from 'src/app/services/skill.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { UserService } from 'src/app/services/user.service';
import { Education } from 'src/app/Interface/Education';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience } from 'src/app/Interface/Experience';
import { Projet } from 'src/app/Interface/Projet';
import { Certificat } from 'src/app/Interface/Certificat';
import { Skill } from 'src/app/Interface/Skill';
import { User } from 'src/app/Interface/User';
import { AddEducationComponent } from '../add-education/add-education.component';
import { MatDialog } from '@angular/material/dialog';
import { AddExperienceComponent } from '../add-experience/add-experience.component';
import { AddProjetComponent } from '../add-projet/add-projet.component';
import { AddCertificatComponent } from '../add-certificat/add-certificat.component';
import { AddSkillComponent } from '../add-skill/add-skill.component';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CVComponent implements OnInit {
  private isAddModalOpenSubject = new BehaviorSubject<boolean>(false);
  isAddModalOpen$: Observable<boolean> =
    this.isAddModalOpenSubject.asObservable();
  educations: Education[] = []; // Déclarez une propriété pour stocker les éducations
  experience: Experience[] = [];
  projet: Projet[] = [];
  certificat: Certificat[] = [];
  skill: Skill[] = [];
  user: User = {} as User;
  isAddModalOpen = false;

  constructor(
    private educationService: EducationService,
    private experienceService: ExperienceService,
    private projetService: ProjetService,
    private certificatService: CertificationService,
    private SkillService: SkillService,
    private userService: UserService,
    public dialog: MatDialog
  ) {}
  openAddDialog() {
    {
      const dialogRef = this.dialog.open(AddEducationComponent, {
        width: '600px',
        height: '600px',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('La boîte de dialogue est fermée');
        // Traitez les résultats si nécessaire
      });
    }
  }
  openAddDialogEperience() {
    {
      const dialogRef = this.dialog.open(AddExperienceComponent, {
        width: '600px',
        height: '600px',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('La boîte de dialogue est fermée');
        // Traitez les résultats si nécessaire
      });
    }
  }
  openAddDialogProjet() {
    {
      const dialogRef = this.dialog.open(AddProjetComponent, {
        width: '600px',
        height: '600px',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('La boîte de dialogue est fermée');
        // Traitez les résultats si nécessaire
      });
    }
  }
  openAddDialogCertificat() {
    {
      const dialogRef = this.dialog.open(AddCertificatComponent, {
        width: '600px',
        height: '600px',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('La boîte de dialogue est fermée');
        // Traitez les résultats si nécessaire
      });
    }
  }
  openAddDialogskill() {
    {
      const dialogRef = this.dialog.open(AddSkillComponent, {
        width: '600px',
        height: '600px',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('La boîte de dialogue est fermée');
        // Traitez les résultats si nécessaire
      });
    }
  }
  ngOnInit(): void {
    this.getCertificat();
    this.getSkill();
    this.getProjet();
    this.getExperience();
    this.getEducations(); // Appelez la méthode pour récupérer les éducations lors de l'initialisation du composant
    this.getuser();
  }
  openAddModal() {
    this.isAddModalOpenSubject.next(true);
    console.log('ad');
  }
  closeAddModal() {
    this.isAddModalOpenSubject.next(false);
  }

  getEducations() {
    this.educationService.getAll().subscribe(
      (res: any) => {
        this.educations = res.data; // Stockez les éducations dans la propriété déclarée
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des éducations : ',
          error
        );
      }
    );
  }
  getExperience() {
    this.educationService.getExperience().subscribe(
      (res: any) => {
        this.experience = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des éducations : ',
          error
        );
      }
    );
  }
  getProjet() {
    this.projetService.getProjet().subscribe(
      (res: any) => {
        this.projet = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des certificat : ',
          error
        );
      }
    );
  }
  getCertificat() {
    this.certificatService.getCertificat().subscribe(
      (res: any) => {
        this.certificat = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des éducations : ',
          error
        );
      }
    );
  }
  getSkill() {
    this.SkillService.getAll().subscribe(
      (res: any) => {
        this.skill = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des éducations : ',
          error
        );
      }
    );
  }
  getuser() {
    this.userService.getuser().subscribe(
      (res: any) => {
        this.user = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des éducations : ',
          error
        );
      }
    );
  }
  deleteEducation(id: string) {
    this.educationService.delete(id).subscribe(
      (res: any) => {
        window.alert('Éducation supprimée avec succès');
        console.log('Éducation supprimée avec succès');
        this.getEducations(); // Actualiser la liste des éducations
      },
      (error) => {
        console.error("Erreur lors de la suppression de l'éducation : ", error);
      }
    );
  }
  deleteExperience(id: string) {
    this.experienceService.delete(id).subscribe(
      (res: any) => {
        window.alert('Experience supprimée avec succès');
        console.log('Experience supprimée avec succès');
        this.getExperience(); // Actualiser la liste des éducations
      },
      (error) => {
        console.error(
          "Erreur lors de la suppression de l'exeperience : ",
          error
        );
      }
    );
  }
  deleteProjet(id: string) {
    this.projetService.delete(id).subscribe(
      (res: any) => {
        window.alert('projet supprimée avec succès');
        console.log('projet supprimée avec succès');
        this.getProjet(); // Actualiser la liste des éducations
      },
      (error) => {
        console.error("Erreur lors de la suppression de l'projet : ", error);
      }
    );
  }
  deleteCertificat(id: string) {
    this.certificatService.delete(id).subscribe(
      (res: any) => {
        window.alert('Certificat supprimée avec succès');
        console.log('Certificat supprimée avec succès');
        this.getCertificat(); // Actualiser la liste des éducations
      },
      (error) => {
        console.error(
          "Erreur lors de la suppression de l'Certificat : ",
          error
        );
      }
    );
  }
  deleteSkill(id: string) {
    this.SkillService.delete(id).subscribe(
      (res: any) => {
        window.alert('Skill supprimée avec succès');
        console.log('Skill supprimée avec succès');
        this.getSkill(); // Actualiser la liste des éducations
      },
      (error) => {
        console.error("Erreur lors de la suppression de l'Skill : ", error);
      }
    );
  }
}
