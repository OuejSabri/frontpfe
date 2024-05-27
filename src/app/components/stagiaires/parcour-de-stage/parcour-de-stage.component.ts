import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-parcour-de-stage',
  templateUrl: './parcour-de-stage.component.html',
  styleUrls: ['./parcour-de-stage.component.scss']
})
export class ParcourDeStageComponent implements OnInit {
  idUser: any
  fileLettre!: File
  fileRapport!: File
  rapport: any
  lettreAffectation: any
  attestation: any
  candidature: any
  constructor(
    private candidaService: CandidatureService,
    // private uploadService: UploadService,
    private authService: AuthService
  ) {
    this.idUser = this.authService.getUserId()
  }

  ngOnInit(): void {
    this.getDetailleCandidates()

  }

  getDetailleCandidates() {
    // this.candidaService.acceptedById(this.idUser).subscribe((res: any) => {
    //   this.candidature = res.data
    //   this.uploadService.getAssignment(this.candidature._id).subscribe((res: any) => {
    //     this.lettreAffectation = res.data

    //   })
    //   this.uploadService.getRapport(this.candidature._id).subscribe((res: any) => {
    //     this.rapport = res.data

    //   })
    //   this.uploadService.getAttestation(this.candidature._id).subscribe((res: any) => {
    //     this.attestation = res.data

    //   })
    // })
  }

  uploadAffectation() {
    // let data = new FormData()
    // data.append('assignement', this.fileLettre)
    // data.append('candidature', this.candidature._id)
    // this.uploadService.createAssignment(data).subscribe((res) => {
    //   console.log(res)
    // })
  }

  uploadRapport() {
    // let data = new FormData()
    // data.append('rapport', this.fileRapport)
    // data.append('candidature', this.candidature._id)
    // this.uploadService.createRapport(data).subscribe((res) => {
    //   console.log(res)
    // })
  }

  onChangeFileLettre(event: any) {
    this.fileLettre = event.target.files[0]
    console.log(this.fileLettre)
  }
  onChangeFileRapport(event: any) {
    this.fileRapport = event.target.files[0]
    console.log(this.fileRapport)
  }


}
