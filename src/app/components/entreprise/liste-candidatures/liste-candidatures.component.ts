import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';


@Component({
  selector: 'app-liste-candidatures',
  templateUrl: './liste-candidatures.component.html',
  styleUrls: ['./liste-candidatures.component.scss'],
})
export class ListeCandidaturesComponent implements OnInit {
  data: any;
  currentIdUser: any;
  selectedCandidat: any;
  candidaturesTriees:any;
  constructor(
    private candidatureService: CandidatureService,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentIdUser = this.authService.getUserId();
  }

  ngOnInit(): void {
    this.getAllPostulations();
  }

  getAllPostulations() {
    const currentIdUser = this.authService.getUserId();
    this.candidatureService.getAll().subscribe((res: any) => {
      this.data = this.filterCandidature(res.data);
      console.log(this.data);
      this.candidaturesTriees = this.trierCandidatures(this.data);
    });
  }
  refuser(id: any) {
    this.candidatureService.refuserCandidature(id).subscribe((res: any) => {
      this.data = res.data;
      window.location.reload();
    });
  }

  accepter(id: any) {
    this.candidatureService.accepterCandidature(id).subscribe((res: any) => {
      this.data = res.data;
      window.location.reload();
    });
  }

  filterCandidature(data: any[]) {
    console.log(data, this.currentIdUser);
    return data.filter(
      (item: any) => item?.offreStage?.societe._id === this.currentIdUser
    );
  }
  trierCandidatures(candidatures: any[]) {
    const ordreStatuts = ['en_attente', 'accepter', 'refuser'];
    return candidatures.sort((a, b) => {
      return ordreStatuts.indexOf(a.statut) - ordreStatuts.indexOf(b.statut);
    });
  }

  getProfilById(id: any) {
    this.router.navigateByUrl(`/dashboard/company/profilStagiaire/${id}`);
  }
}
