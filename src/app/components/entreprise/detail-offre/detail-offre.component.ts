import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { OffreService } from 'src/app/services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.scss'],
})
export class DetailOffreComponent implements OnInit {
  offreForm: FormGroup;
  idPost: any;
  data: any;
  curretnUserId: any;
  offreDetail: any;
  currentOffre:any;
  constructor(
    private service: OffreService,
    private acttivatedRoot: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
    this.curretnUserId = this.authService.getUserId();
    this.currentOffre = this.service.getOffreById(this.idPost);
    this.acttivatedRoot.params.subscribe((param: any) => {
      this.idPost = param.id;
    });
    this.offreForm = new FormGroup({
      societe: new FormControl(this.curretnUserId),
      offreStage: new FormControl(this.idPost),
      titre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      technologies: new FormControl('', Validators.required),
      lieu: new FormControl('', Validators.required),
      domaine:new FormControl(''),
      date_dexpiration: new FormControl(Date.now),
      duree: new FormControl(''),
      number_candidats: new FormControl(''),
      status: new FormControl(''),

    });
  }
  ngOnInit(): void {
    this.service.getOffreById(this.idPost).subscribe((res: any) => {
      this.data = res;
      this.offreDetail = res.data;
      this.offreForm.patchValue(this.offreDetail);
    });
  }

  getOffreById(id: number) {
    id: this.data.id;
    console.log("l'id est " + id);
    this.service.getOffreById(id).subscribe((data) => {
      this.data = Object.values(data);
    });
  }
  deleteOffre(id: any) {
    this.service.deleteOffre(this.idPost).subscribe((res) => {
      console.log(res);
    });
    this.router.navigateByUrl('/dashboard/company');
    Swal.fire({
      title: 'succes!',
      text: "L'offre supprimé avec success",
      icon: 'success',
    });
  }

  updateOffre(id: any) {
    let data = this.offreForm.getRawValue();
    try {
      this.service.updateOffre(id, data).subscribe((res:any) => {
        console.log(res);
        
      });
    } catch (error) {
      console.log(error);
    }
  }
}
