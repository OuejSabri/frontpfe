import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {OffreService} from  'src/app/services/offre.service' ;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publier',
  templateUrl: './publier.component.html',
  styleUrls: ['./publier.component.scss'],
})
export class PublierComponent implements OnInit {
  addForm: FormGroup;
  user: any;
  curretnUserId: any;
  currentUser: any;
  constructor(
    private offreSer: OffreService,
    private authservice: AuthService,
    private router:Router

  ) {
    this.curretnUserId = this.authservice.getUserId();
    this.addForm = new FormGroup({
      societe: new FormControl(this.curretnUserId),
      titre: new FormControl(),
      description: new FormControl( ),
      date_dexpiration: new FormControl(),
      duree: new FormControl(),
      number_candidats: new FormControl(),
      domaine: new FormControl(),
      technologies: new FormControl(),
      lieu: new FormControl(),
      date: new FormControl(Date.now()),
    });
  }

  ngOnInit(): void {
  }

  publierOffre() {
    let data = this.addForm.getRawValue();

    if (this.addForm.valid) {
      this.offreSer.createOffre(data).subscribe(
        (res) => {
          console.log(data);
          this.router.navigateByUrl('/company/mes-offres');
          Swal.fire({
            title: 'succes!',
            text: "L'offre a été ajoutée avec succès",
            icon: 'success',
          });
        },
        (err) => console.error(err)
      );
    } else {
      console.log('form invalide');
    }
  }

  getAllOffres() {
    this.offreSer.getAllOffre().subscribe((res) => console.log(res));
  }
  getOffreById(id: number) {
    this.offreSer.getOffreById(id).subscribe((res) => console.log(res));
  }

  async deleteOffre(id: number) {
    if (window.confirm('Voulez vous supprimer cette offre ?')) {
      try {
        await this.offreSer.deleteOffre(id);
        alert("La suppression de l'offre a bien eu lieu");
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la suppression de l'offre :",
          error
        );
      }
    }
  }

  updateOffre(id: number, data: any) {
    this.offreSer.updateOffre(id, data).subscribe(
      (res) => {
        console.log(res);
        alert("L'offre à été modifiée avec succès");
      },
      (err) => {
        alert("Erreur lors de la modification de l'offre");
      }
    );
  }
}

