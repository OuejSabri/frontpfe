import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth.service';
import { OffreService } from 'src/app/services/offre.service';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-mes-offres',
  templateUrl: './mes-offres.component.html',
  styleUrls: ['./mes-offres.component.scss'],
})
export class MesOffresComponent implements OnInit {
  // data: any;
  // curretnUserId: any;
  // first: number = 0;
  // rows: number = 10;
  // onPageChange(event: PageEvent) {
  //   this.first = event.first;
  //   this.rows = event.rows;
  // }

  // constructor(
  //   private service: OffreService,
  //   private authservice: AuthService,
  //   private router: Router
  // ) {
  //   this.curretnUserId = this.authservice.getUserId();
  // }

  // ngOnInit(): void {
  //   this.getAllMesOffres();
  // }
  // addOffer(){
  //   this.router.navigateByUrl('/dashboard/company/offres/add');
  // };

  // getAllMesOffres() {
  //   this.service.getOffresByidSociete(this.curretnUserId).subscribe((res:any) => {
  //     console.log(res.data);
  //     this.data = res.data;
  //   });
  // }
  // viewSubject(idSubject: any) {
  //   this.router.navigateByUrl(`/offres/detailledusujet/${idSubject}`);
  // }
  // viewTask(idSubject: any) {
  //   this.router.navigateByUrl(`/offres/listetaches/${idSubject}`);
  // }

  // filterStag(data: any[]) {
  //   console.log(data, this.curretnUserId);
  //   return data.filter(
  //     (item: any) => item?.offreStage?.encadrant._id === this.curretnUserId
  //   );
  // }
  curretnUserId: any;
  data: any;
  addForm;
  offres: any[] = [];
  responsiveOptions:any;
  constructor(
    private messageService: MessageService,
    private OffreService: OffreService,
    private authservice: AuthService,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.curretnUserId = this.authservice.getUserId();
    this.addForm = new FormGroup({
      societe: new FormControl(this.curretnUserId),
      titre: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      date_dexpiration: new FormControl(''),
      duree: new FormControl(''),
      number_candidats: new FormControl('', Validators.min(1)),
      domaine: new FormControl(''),
      technologies: new FormControl(''),
      lieu: new FormControl(''),
      date: new FormControl(Date.now()),
    });
  }

  ngOnInit() {
    this.getAllMesOffres();
  }

  getAllMesOffres() {
    this.OffreService.getOffresByidSociete(this.curretnUserId).subscribe(
      (res: any) => {
        console.log(res.data);
        this.data = res.data;
      }
    );
  }
  getOffreById(id: any) {
    this.router.navigateByUrl(`/dashboard/company/offre/${id}`);

    this.OffreService.getOffreById(id).subscribe((data) => {
      this.data = Object.values(data);
    });
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
}

  
