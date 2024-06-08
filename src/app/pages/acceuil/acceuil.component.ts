import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { FeedbackService } from 'src/app/services/feedback.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Domaines',
      items: [
        {
          label: 'Informatique',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('Informatique');
          },
        },
        {
          label: 'TIC',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('TIC');
          },
        },
        {
          label: 'Gestions Informatique',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterDomaine('Gestions Informatique');
          },
        },
        {
          label: 'Réseaux informatique',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterDomaine('Réseaux informatique');
          },
        },
      ],
    },
    {
      label: 'Lieu',
      items: [
        {
          label: 'Mahdia',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Mahdia');
          },
        },
        {
          label: 'Sfax',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Sfax');
          },
        },
        {
          label: 'Sousse',
          //   icon: 'pi pi-refresh',
          command: () => {
            this.filterLieux('Sousse');
          },
        },
        {
          label: 'Tunis',
          //   icon: 'pi pi-times',
          command: () => {
            this.filterLieux('Tunis');
          },
        },
      ],
    },
  ];
  offres: any[] | undefined;
  data: any;
  user: any;
  addForm: any;
  currentuser: any;
  constructor(
    private messageService: MessageService,
    private OffreService: OffreService,
    private route: Router,
    private userService: UserService,
    private feedbackS: FeedbackService
  ) {
    this.user = this.userService.getuser().subscribe((res: any) => {
      this.currentuser = res.data;
      this.addForm.patchValue(this.currentuser);
    });
      this.addForm = new FormGroup({
        nom: new FormControl('' , Validators.required),
        email: new FormControl('', Validators.required),
        commentaire: new FormControl('', Validators.required),
      });
  }

  ngOnInit() {
    this.getAllOffres();
    
  }
  getAllOffres() {
    this.OffreService.getAllOffre().subscribe((res: any) => {
      this.offres = res;
    });
  }
  getOffreById(id: any) {
    this.route.navigateByUrl(`/dashboard/student/offre/${id}`);

    
  }
  getAllfeedbacks() {
    this.feedbackS.getAllFeedback().subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
  envoyerFeedback() {
    let data = this.addForm.getRawValue();
    if (this.addForm.valid) {
      this.feedbackS.envoyerFeedback(data).subscribe((res) => {
        alert('le feedBack a été envoyé avec succès');
        console.log(data);
        window.location.reload();
      });
    } else {
      console.log('form invalide');
    }
  }
  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated',
    });
  }

  delete() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Delete',
      detail: 'Data Deleted',
    });
  }

  filterDomaine(domaine: String) {
    return this.offres?.filter((offre: any) => {
      offre?.domaine === domaine;
    });
  }
  filterLieux(lieu: string) {
    return this.offres?.filter((offre: any) => {
      offre?.lieu === lieu;
    });
  }
  search(data: any) {
    return this.offres?.filter((offre: any) => {
      offre?.includes(data);
    });
  }
}
