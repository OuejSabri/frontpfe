import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { ProfilService } from 'src/app/services/profil.service';
@Component({
  selector: 'app-voir-stagiaire-profil',
  templateUrl: './voir-stagiaire-profil.component.html',
  styleUrls: ['./voir-stagiaire-profil.component.scss'],
})
export class VoirStagiaireProfilComponent implements OnInit {
  profil: any;
  userId: any;
  constructor(
    private acttivatedRoot: ActivatedRoute,
    private profilService: ProfilService,
    private cvService: CvService
  ) {
    this.acttivatedRoot.params.subscribe((param: any) => {
      this.userId = param.id;
    });
  }
  ngOnInit(): void {
    this.getProfilById(this.userId);
  }
  getProfilById(id: any) {
    this.profilService.getOne(id).subscribe((res: any) => {
      this.profil = res.data;
      console.log(res.data);
    });
  }

  getDownloadCV(id:any) {
    this.cvService.downloadthisresume(id).subscribe(
      (res: Blob) => {
        const blob = new Blob([res], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv.pdf'; // Name of the downloaded file
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        window.alert('Your CV has been successfully downloaded.');
      },
      (error) => {
        console.error('Error downloading CV:', error);
        window.alert('An error occurred while downloading the CV.');
      }
    );
  }
}
