import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ProfilService } from 'src/app/services/profil.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  addFormP: FormGroup;
  profileForm: FormGroup;
  data: any;
  idUser: any;
  curretnUserId: any;
  currentUser: any;
  role = sessionStorage.getItem('role');

  profileDetail: any;
  constructor(
    private profilS: ProfilService,
    private authservice: AuthService,
    private userService: UserService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.curretnUserId = this.authservice.getUserId();
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.currentUser = res.data;
    });

    this.profileForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      email: new FormControl(''),
      date_naissance: new FormControl(''),
      sexe: new FormControl(''),
      adresse: new FormControl(''),
      ville: new FormControl(''),
      cv: new FormControl(''),
      etablissement: new FormControl(''),
      telephone: new FormControl(''),
      domaine: new FormControl(''),
      cin: new FormControl(''),
    });

    this.addFormP = new FormGroup({
      ancienMotDePasse: new FormControl(''),
      nouveauMotDePasse: new FormControl(''),
      repMotDePasse: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.profileDetail = res.data;
      this.profileForm.patchValue(this.profileDetail);
    });
    this.profilS.getById(this.curretnUserId).subscribe((res: any) => {
      this.profileDetail = res.data;
      this.profileForm.patchValue(this.profileDetail);
    });
  }

  enregistrer() {
    let profile = this.profileForm.getRawValue();
    profile.user = this.curretnUserId;

    this.profilS.creerProfil(profile).subscribe(
      (response) => {
        this.toastr.success(
          'Le profil a été enregistré avec succès',
          'Success'
        );
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du profil:", error);
        this.toastr.error("Erreur lors de l'enregistrement du profi", 'Erreur');
      }
    );
  }
  

  getProfils() {
    this.profilS.getProfils().subscribe((res) => console.log(res));
  }
  getProfil(id: any) {}
  getById(id: number) {
    this.userService.getOne(id).subscribe((res: any) => {
      this.profileDetail = res.data;
      console.log(this.profileDetail);
      this.profileForm.patchValue(this.profileDetail);
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file);

    // // Replace the URL with the correct endpoint for uploading CVs
    // this.http.post('http://localhost:4200/api/cv/add', formData).subscribe(
    //   (response) => {
    //     console.log('File uploaded successfully'); 
    //   },
    //   (error) => {
    //     console.error('Error uploading file:', error);
    //   }
    // );
  }
  calculateAge(dateOfBirth: string): number | null {
    if (!dateOfBirth) return null;

    const dob = new Date(dateOfBirth);
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age;
  }

  async updateProfil(id: number, data: any) {
    try {
      const updatedProfile = await this.profilS.updateProfil(
        this.curretnUserId,
        data
      );
      return updatedProfile;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  modifierPassword() {
    let data = this.addFormP.getRawValue();
    const id = this.authservice.getUserId();
    this.authservice.modifierPassword(id, data).subscribe((res) => {
      console.log('mot de passe modifiée');
    });
  }
}
