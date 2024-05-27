import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-liste-candidature-accepte',
  templateUrl: './liste-candidature-accepte.component.html',
  styleUrls: ['./liste-candidature-accepte.component.scss'],
})
export class ListeCandidatureAccepteComponent implements OnInit {
  data: any;
  currentIdUser: any;

  selectedCandidat: any;

  constructor(
    private messageService: MessageService,
    private candidatureService: CandidatureService,
    private router: Router,
    private authService: AuthService
  ) {
    this.currentIdUser = this.authService.getUserId();
  }

  ngOnInit(): void {
    this.getAllPostulations();
  }

  getAllPostulations() {
    const currentIdUser = this.authService.getUserId();
    this.candidatureService
      .getMesCandidatures(currentIdUser)
      .subscribe((res: any) => {
        this.data = this.filterCandidature(res.data);
        console.log(this.data);
      });
  }

  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Candidature accepté',
    });
  }

  taches(id: any) {
    this.router.navigateByUrl(`/dashboard/company/liste-taches/${id}`);
  }

  filterCandidature(data: any[]) {
    console.log(data, this.currentIdUser);
    return data.filter(
      (item: any) =>
        item?.offreStage?.societe._id === this.currentIdUser &&
        item?.status === 'accepter'
    );
  }
}
