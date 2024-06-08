import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.scss'],
})
export class AttestationComponent implements OnInit {
  data: any;
  currentIdUser: any;
  item!: String;
  Candidats: any[] = [];

  constructor(
    private candidatureService: CandidatureService,
    private authService: AuthService,
    private upd: UploadService
  ) {
    this.currentIdUser = this.authService.getUserId();

  }

  ngOnInit(): void {
    this.getAllPostulations();
  }
  getAllPostulations() {
    this.candidatureService.getAll().subscribe((res: any) => {
      this.data = this.filterCandidature(res.data);
    });
  }
  filterCandidature(data: any[]) {
    return data.filter(
      (item: any) =>
        item?.offreStage?.societe._id === this.currentIdUser &&
        item?.status === 'accepter'
    );
  }

  downloadAttestation() {
    this.upd.generateAtestation(this.item).subscribe((res: any) => {
      console.log(this.item);
      console.log(res.data);
      this.upd.downloadAttestation(this.item).subscribe(
        (res: Blob) => {
          const blob = new Blob([res], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'attestation.pdf'; // Name of the downloaded file
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          window.alert('Your attestation has been successfully downloaded.');
        },
        (error) => {
          console.error('Error downloading attestation:', error);
          window.alert('An error occurred while downloading the attestation.');
        }
      );
    });
  }
  downloadAffectation() {
    this.upd.generateAffectation(this.item).subscribe((res: any) => {
      console.log(this.item);
      console.log(res.data);
      this.upd.downloadAffectation(this.item).subscribe(
        (res: Blob) => {
          const blob = new Blob([res], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'affectation.pdf'; // Name of the downloaded file
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          window.alert('Your affectation has been successfully downloaded.');
        },
        (error) => {
          console.error('Error downloading affectation:', error);
          window.alert('An error occurred while downloading the affectation.');
        }
      );
    });
  }
}