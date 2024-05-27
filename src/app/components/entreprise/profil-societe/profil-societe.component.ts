import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-societe',
  templateUrl: './profil-societe.component.html',
  styleUrls: ['./profil-societe.component.scss'],
})
export class ProfilSocieteComponent {
  profileForm: FormGroup;
  addFormP: FormGroup;

  data: any;
  idUser: any;
  curretnUserId: any;
  currentUser: any;
  role = sessionStorage.getItem('role');
  profileDetail: any;
  constructor(
    private profilS: ProfilService,
    private authservice: AuthService,
    private userService: UserService
  ) {
    this.curretnUserId = this.authservice.getUserId();
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.currentUser = res.data;
    });

    this.profileForm = new FormGroup({
      nom: new FormControl(''),
      email: new FormControl(''),
      matriculeFiscale: new FormControl(''),
      date_naissance: new FormControl(''),
      domaine: new FormControl(''),
      adresse: new FormControl(''),
      ville: new FormControl(''),
      code_postal: new FormControl(''),
      website: new FormControl(''),
      telephone: new FormControl(''),
      description: new FormControl(''),
      fax: new FormControl(''),
    });

    this.addFormP = new FormGroup({
      ancienMotDePasse: new FormControl(''),
      nouveauMotDePasse: new FormControl(''),
      repMotDePasse: new FormControl(''),
    });
  }
  ngOnInit(): void {
    console.log(this.curretnUserId);
    console.log(this.currentUser);
    this.userService.getOne(this.curretnUserId).subscribe((res: any) => {
      this.profileDetail = res.data;
      console.log(this.profileDetail);
      this.profileForm.patchValue(this.profileDetail);
    });
  }

  enregistrer() {
    let data = this.profileForm.getRawValue();
    if (this.profileForm.valid) {
      this.profilS.creerProfil(data).subscribe((res) => {
        alert('Le profil a été enregistré avec succès');
      });
    } else {
      console.log('form invalide');
    }
  }

  // getProfils() {
  //   this.profilS.getProfils().subscribe((res) => console.log(res));
  // }
  getById(id: any) {
    this.profilS.getById(id).subscribe((res) => console.log(res));
  }

  // updateProfil(id: any, data: any) {
  //   this.profilS.updateProfil(id, data).subscribe(
  //     (res) => {
  //       console.log(res);
  //       alert('Le profil à été modifiée avec succès');
  //     },
  //     (err) => {
  //       alert('Erreur lors de la modification de profil');
  //     }
  //   );
  // }

  modifierPassword() {
    let data = this.addFormP.getRawValue();
    const id = this.authservice.getUserId();
    this.authservice.modifierPassword(id, data).subscribe((res) => {
      console.log('mot de passe modifiée');
    });
  }
}

