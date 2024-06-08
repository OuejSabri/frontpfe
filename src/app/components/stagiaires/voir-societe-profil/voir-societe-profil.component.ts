import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { ProfileSocieteService } from 'src/app/services/profile-societe.service';

@Component({
  selector: 'app-voir-societe-profil',
  templateUrl: './voir-societe-profil.component.html',
  styleUrls: ['./voir-societe-profil.component.scss'],
})
export class VoirSocieteProfilComponent implements OnInit {
  profil: any;
  userId: any;
  constructor(
    private acttivatedRoot: ActivatedRoute,
    private profSocServ : ProfileSocieteService
  ) {
    this.acttivatedRoot.params.subscribe((param: any) => {
      this.userId = param.id;
    });
  }
  ngOnInit(): void {
    this.getProfilById(this.userId);
  }
  getProfilById(id: any) {
    this.profSocServ.getProfSociete(id).subscribe((res: any) => {
      this.profil = res.data;
      console.log(res.data);
    });
  }
}
