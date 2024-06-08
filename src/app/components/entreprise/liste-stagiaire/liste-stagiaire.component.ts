import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-stagiaire',
  templateUrl: './liste-stagiaire.component.html',
  styleUrls: ['./liste-stagiaire.component.scss'],
})
export class ListeStagiaireComponent {
  responsiveOptions:any;
  data: any;
  constructor(private serviceUser: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getAllStagiaires();

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
  }
  getAllStagiaires() {
    this.serviceUser.getAllStagiaires().subscribe((res: any) => {
      this.data = Object.values(res.data);
      console.log(this.data);
    });
  }
  getProfilById(id: any) {
    this.router.navigateByUrl(`/dashboard/company/profilStagiaire/${id}`);
  }
}
