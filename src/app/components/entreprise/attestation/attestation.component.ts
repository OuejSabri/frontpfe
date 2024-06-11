import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UploadService } from 'src/app/services/upload.service';
import { saveAs } from 'file-saver'; 
import { MessageService } from 'primeng/api';

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
  selectedStagiaire!: string;

  constructor(
    private candidatureService: CandidatureService,
    private authService: AuthService,
    private upd: UploadService,
    private messageService: MessageService
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
         this.messageService.add({
           severity: 'success',
           summary: 'Success',
           detail: 'Votre lettre d\'attestation a été téléchargée avec succès.',
         });
        },
        (error) => {
          console.error('Error downloading attestation:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail:
              'Une erreur est survenue lors du téléchargement de la lettre d\'attestation.',
          });
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
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Votre lettre d\'affectaion a été téléchargée avec succès.',
          });
        },
        (error) => {
          console.error('Error downloading affectation:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail:
            'Une erreur est survenue lors du téléchargement de la lettre d\'affictation.',
        });
        }
      );
    });
  }

  downloadReport() {
    // Logic to download the report
    if (this.isReportAvailable()) {
      console.log('Report downloaded for', this.selectedStagiaire);
      this.upd.downloadRapport(this.selectedStagiaire).subscribe(
        (res: Blob) => {
          const blob = new Blob([res], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'rapport_${this.selectedStagiaire}.pdf'; // Name of the downloaded file
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Votre rapport a été téléchargée avec succès.',
          });
        },
        (error) => {
          console.error('Erreur lors du téléchargement du rapport', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Une erreur est survenue lors du téléchargement de la lettre du rapport.',
          });
        }
      );
    }
  }

  isReportAvailable(): boolean {
    // Replace with your logic to check if the report is available
    return !!this.selectedStagiaire; // Example: check if a stagiaire is selected
  }
}
