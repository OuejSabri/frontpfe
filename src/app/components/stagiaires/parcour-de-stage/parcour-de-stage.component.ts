import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UploadService } from 'src/app/services/upload.service';

interface EventItem {
  status?: string;
  descrip?: String;
  button?: string;
  icon?: string;
  color?: string;
  command?: () => void;
  uploadCommand?: (event: Event) => void;
  isUploadRapport?: boolean;
  isDisable?: boolean;
}
@Component({
  selector: 'app-parcour-de-stage',
  templateUrl: './parcour-de-stage.component.html',
  styleUrls: ['./parcour-de-stage.component.scss'],
})
export class ParcourDeStageComponent implements OnInit {
  idUser: any;
  fileLettre!: File;
  fileRapport!: File;
  rapport: any = null;
  lettreAffectation: any;
  attestation: any;
  candidature: any;
  events: EventItem[];
  constructor(
    private candidaService: CandidatureService,
    private uploadService: UploadService,
    private authService: AuthService
  ) {
    this.idUser = this.authService.getUserId();
    this.events = [
      {
        status: 'lettre affectation',
        descrip:
          "Vous pouvez télécharger votre lettre d'affectation a partir de ce lien ",
        icon: 'pi pi-download',
        color: '#9C27B0',
        button: 'Télécharger',
        isDisable: this.lettreAffectation == null,
        command: () => {
          this.getDownloadAffectation();
          console.log('Télécharger lettre affectation');
        },
      },
      {
        status: 'Upload rapport',
        descrip:
          "Vous pouvez envoyer votre rapport de stage a partir de ce lien ",
        icon: 'pi pi-upload',
        color: '#673AB7',
        button: 'Upload',
        isUploadRapport: true,
        uploadCommand: (event: Event) => this.onChangeFileRapport(event),
        command: () => {
          this.uploadRapport();
        },
      },
      {
        status: 'download attestation',
        descrip:
          'Vous pouvez télécharger votre attestation a partir de ce lien ',
          isDisable: this.attestation == null,
        icon: 'pi pi-download',
        color: '#FF9800',
        button: 'Télécharger',
        command: () => {
          this.getDownloadAttestation();
          console.log('Télécharger attestation');
        },
      },
    ];
  }

  ngOnInit(): void {
    this.getDetailleCandidates();
  }

  getDetailleCandidates() {
    this.candidaService.acceptedById(this.idUser).subscribe((res: any) => {
      this.candidature = res.data;
      this.uploadService
        .getAssignment(this.candidature._id)
        .subscribe((res: any) => {
          this.lettreAffectation = res.data;
        });
      this.uploadService
        .getRapport(this.candidature._id)
        .subscribe((res: any) => {
          this.rapport = res.data;
        });
      this.uploadService
        .getAttestation(this.candidature._id)
        .subscribe((res: any) => {
          this.attestation = res.data;
        });
    });
  }

  uploadAffectation() {
    let data = new FormData();
    data.append('affectation', this.fileLettre);
    data.append('candidature', this.candidature._id);
    this.uploadService.createAffectation(data).subscribe((res) => {
      console.log(res);
    });
  }

  uploadRapport() {
    let data = new FormData();
    data.append('rapport', this.fileRapport);
    data.append('candidature', this.candidature._id);
    this.uploadService.createRapport(data).subscribe((res) => {
      console.log(res);
    });
  }
  getDownloadAttestation() {
    this.uploadService.downloadAttestation(this.candidature._id).subscribe(
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
  }
  getDownloadAffectation() {
    this.uploadService.downloadAffectation(this.candidature._id).subscribe(
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
  }
  onChangeFileLettre(event: any) {
    this.fileLettre = event.target.files[0];
    console.log(this.fileLettre);
  }
  onChangeFileRapport(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileRapport = input.files[0];
      console.log('File selected:', this.fileRapport);
    }
  }
}
