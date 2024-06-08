import { Component, Input, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { Profil } from 'src/app/Interface/Profil';
import { Router } from '@angular/router';
import { CvService } from 'src/app/services/cv.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  @Input() profil!: Profil;
  profilForm!: FormGroup;
  addFormP: FormGroup;
  uploadedFiles: any[] = [];
  constructor(
    private fb: FormBuilder,
    private profilService: ProfilService,
    private router: Router,
    private cvService: CvService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    this.profilForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateOfBirth: ['',],
      gender: [''],
      address: [''],
      department: [''],
      nationality: [''],
    });

    this.addFormP = new FormGroup({
      ancienMotDePasse: new FormControl(''),
      nouveauMotDePasse: new FormControl(''),
      repMotDePasse: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getProfil();
  }

  private getUserIdFromToken(): number | undefined {
    let token = sessionStorage.getItem('accessToken') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.id;
  }

  getProfil() {
    const userId = this.getUserIdFromToken();
    if (userId !== undefined) {
      this.profilService.getById(userId).subscribe(
        (res: any) => {
          this.profil = res.data;
          console.log(res.data);
          this.profilForm.patchValue({
            nom: this.profil?.user?.nom,
            email: this.profil?.user?.email,
            telephone: this.profil?.user?.telephone,
            dateOfBirth: this.profil?.dateOfBirth,
            gender: this.profil?.gender,
            address: this.profil?.address,
            department: this.profil?.department,
            nationality: this.profil?.nationality,
          });
        },
        (error) => {
          console.error('Error fetching profile:', error);
        }
      );
    } else {
      console.error('User ID is not defined');
    }
  }
  updateProfil() {
    const userId = this.getUserIdFromToken();
    const authToken = localStorage.getItem('accessToken'); // Obtenez le token depuis le stockage

    if (userId !== undefined && authToken !== null) {
      this.profilService.updateProfil(userId, this.profilForm.value).subscribe(
        (res: any) => {
          window.alert('Profile updated successfully');
          console.log(res);
          window.location.reload();
        },
        (error) => {
          console.error('Error updating profile:', error);
        }
      );
    } else {
      console.error('User ID or auth token is not defined');
    }
  }

  redirectToCvPage() {
    this.router.navigate(['/dashboard/student/cv']);
  }

  getGeneratedCV() {
    this.cvService.generateresume().subscribe(
      (res: any) => {
        window.alert('Your CV has been successfully generated');
        console.log(res.data);
      },
      (error) => {
        console.error('Error generating CV:', error);
      }
    );
  }

  getDownloadCV() {
    this.cvService.downloadresume().subscribe(
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

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
  modifierPassword() {
    const userId = this.getUserIdFromToken();
    let data = this.addFormP.getRawValue();
    this.authService.modifierPassword(userId, data).subscribe((res: any) => {
      console.log('mot de passe modifiée');
      Swal.fire({
        title: 'succes!',
        text: 'Le mot de passe a été modifié avec succès',
        icon: 'success',
      });
      window.location.reload();
    });
  }
}
