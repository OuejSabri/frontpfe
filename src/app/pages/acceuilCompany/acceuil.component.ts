import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent {
  // curretnUserId: any;
  // data: any;
  // addForm;
  // items: MenuItem[] = [
  //   {
  //     label: 'Domaines',
  //     items: [
  //       {
  //         label: '2020',
  //         //   icon: 'pi pi-refresh',
  //         command: () => {
  //           this.filterDate('2020');
  //         },
  //       },
  //       {
  //         label: '2021',
  //         //   icon: 'pi pi-refresh',
  //         command: () => {
  //           this.filterDate('2021');
  //         },
  //       },
  //       {
  //         label: '2022 ',
  //         //   icon: 'pi pi-refresh',
  //         command: () => {
  //           this.filterDate('2022');
  //         },
  //       },
  //       {
  //         label: '2023',
  //         //   icon: 'pi pi-times',
  //         command: () => {
  //           this.filterDate('2023');
  //         },
  //       },
  //       {
  //         label: '2024',
  //         //   icon: 'pi pi-times',
  //         command: () => {
  //           this.filterDate('2024');
  //         },
  //       },
  //     ],
  //   },
  // ];
  // offres: any[] = [];
  // constructor(
  //   private messageService: MessageService,
  //   private OffreService: OffreService,
  //   private authservice: AuthService,
  //   private router: Router
  // ) {
  //   this.curretnUserId = this.authservice.getUserId();
  //   this.addForm = new FormGroup({
  //     societe: new FormControl(this.curretnUserId),
  //     titre: new FormControl('', [Validators.required]),
  //     description: new FormControl('', Validators.required),
  //     date_dexpiration: new FormControl(''),
  //     duree: new FormControl(''),
  //     number_candidats: new FormControl('', Validators.min(1)),
  //     domaine: new FormControl(''),
  //     technologies: new FormControl(''),
  //     lieu: new FormControl(''),
  //     date: new FormControl(Date.now()),
  //   });
  // }

  // ngOnInit() {
  //   this.getAllMesOffres();
  // }

  // getAllMesOffres() {
  //   this.OffreService.getOffresByidSociete(this.curretnUserId).subscribe(
  //     (res: any) => {
  //       console.log(res.data);
  //       this.data = res.data;
  //     }
  //   );
  // }
  // getOffreById(id: any) {
  //   this.router.navigateByUrl(`/dashboard/company/offre/${id}`);

  //   this.OffreService.getOffreById(id).subscribe((data) => {
  //     this.data = Object.values(data);
  //   });
  // }
  // update() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Success',
  //     detail: 'Data Updated',
  //   });
  // }

  // delete() {
  //   this.messageService.add({
  //     severity: 'warn',
  //     summary: 'Delete',
  //     detail: 'Data Deleted',
  //   });
  // }

  // filterDate(date: String) {
  //   console.log(date);
  // }
  // filterLieux(lieux: string) {}
  
}
