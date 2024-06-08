import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ProfileSociete } from 'src/app/Interface/ProfileSociete';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Interface/User';
import { ProfileSocieteService } from 'src/app/services/profile-societe.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profil-societe',
  templateUrl: './profil-societe.component.html',
  styleUrls: ['./profil-societe.component.scss'],
})
export class ProfilSocieteComponent implements OnInit {
  @Input() profile!: ProfileSociete;
  addFormP: FormGroup;
  profileForm!: FormGroup;
  user: User = {} as User;
  constructor(
    private profilService: ProfileSocieteService,
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      fax: ['', ],
      matricule_fiscale: ['', ],
      domaine: ['', ],
      adresse: ['', ],
      ville: ['', ],
      code_postal: ['', ],
      site_web: ['', ],
      description: ['',],
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

  getuser() {
    this.userService.getuser().subscribe(
      (res: any) => {
        this.user = res.data;
        console.log(res.data);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération de user : ',
          error
        );
      }
    );
  }
  getProfil() {
    const userId = this.getUserIdFromToken();
    const user= this.getuser()
    if (userId !== undefined) {
      this.profilService.getSocieteById(userId).subscribe(
        (res: any) => {
          this.profile = res.data;
          this.profileForm.patchValue({
            nom: this.user.nom,
            email: this.user.email,
            telephone: this.user.telephone,
            matricule_fiscale: this.profile?.matricule_fiscale,
            domaine: this.profile?.domaine,
            fax: this.profile?.fax,
            adresse: this.profile?.adresse,
            ville: this.profile?.ville,
            code_postal: this.profile?.code_postal,
            site_web: this.profile?.site_web,
            description: this.profile?.description,
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
    const authToken = localStorage.getItem('accessToken');

    if (userId !== undefined && authToken !== null) {
      this.profilService
        .updateSocieteProfil(userId, this.profileForm.value)
        .subscribe(
          (res: any) => {
            window.alert('Profile updated successfully');
            console.log(res);
          },
          (error) => {
            console.error('Error updating profile:', error);
          }
        );
    } else {
      console.error('User ID or auth token is not defined');
    }
  }
  enregistrer() {
    if (this.profileForm.valid) {
      this.profilService.creerProfileSociete(this.profileForm.value).subscribe(
        (response) => {
          window.alert('Profil ajouté avec succès');
          console.log('Profil ajouté avec succès', response);
          this.profileForm.reset();
        },
        (error) => {
          console.error("Erreur lors de l'ajout du profil", error);
        }
      );
    } else {
      console.log('Le formulaire est invalide');
    }
  }
  modifierPassword() {
    const userId = this.getUserIdFromToken();
    let data = this.addFormP.getRawValue(); 
    this.authService.modifierPassword(userId, data).subscribe((res:any) => {
     
      console.log('mot de passe modifiée');
       Swal.fire({
         title: 'succes!',
         text: 'Le mot de passe a été modifié avec succès',
         icon: 'success',
       }); window.location.reload();
    });
  }
}

