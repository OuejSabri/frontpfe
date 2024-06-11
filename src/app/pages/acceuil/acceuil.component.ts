import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { PaginatorState } from 'primeng/paginator';
import { FeedbackService } from 'src/app/services/feedback.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent implements OnInit {
  searchCriteria: any = {
    societe: '',
    titre: '',
    description: '',
    technologies: [],
    lieu: '',
    domaine: '',
    date_dexpiration: '',
    duree: '',
    number_candidats: '',
    status: '',
  };
  offers: any[] = [];
  first = 0;
  offres: any[] = [];
  pagedOffres: any[] = [];
  data: any;
  user: any;
  addForm: any;
  currentuser: any;
  searchTerm: string = '';
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
      nom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      commentaire: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getAll();
  }
  getAllOffres() {
    this.OffreService.getAllOffre().subscribe((res: any) => {
      this.offres = res;
      this.paginate({ first: this.first, rows: 4 });
    });
  }
  getAll(searchTerm: string = '') {
    this.OffreService.getP(searchTerm).subscribe((data: any) => {
      this.offres = data;
      console.log(data);
      this.paginate({ first: this.first, rows: 4 });
    });
  }

  paginate(event: PaginatorState) {
    this.first = event.first ?? 0;
    const rows = event.rows ?? 4;
    this.pagedOffres = this.offres.slice(this.first, this.first + rows);
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
        this.messageService.add({
          severity: 'success',
          summary: 'Added',
          detail: 'le feedBack a été envoyé avec succès',
        });
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

}
