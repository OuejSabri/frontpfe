import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import { PostulerService } from 'src/app/services/postuler.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.scss'],
})
export class PostulerComponent implements OnInit {
  addForm: FormGroup;
  data: any;
  postDetail:any;
  idPost: any;
  curretnUserId: any;
  curretnUser: any;
  constructor(
    private userService: UserService,
    private service: OffreService,
    private acttivatedRoot: ActivatedRoute,
    private authService: AuthService,
    private candidatureService: CandidatureService
  ) {
    this.curretnUserId = this.authService.getUserId();
    
    this.acttivatedRoot.params.subscribe((param: any) => {
      this.idPost = param.id;
    });
    this.addForm = new FormGroup({
      stagiaire: new FormControl(this.curretnUserId),
      offreStage: new FormControl(this.idPost),
      nom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cv: new FormControl('', Validators.required),
      lettre_motivation: new FormControl('', Validators.required),
      datePostulation: new FormControl(Date.now),
      date_debut: new FormControl(''),
      date_fin: new FormControl(''),
    });
  }

  ngOnInit(): void {

    this.curretnUser = this.userService.getOne(this.curretnUserId).subscribe((res:any)=>{
      this.postDetail = res.data;
      this.addForm.patchValue(this.postDetail)
    })
    this.service.getOffreById(this.idPost).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  getOffreById(id: number) {
    id: this.data.id;
    console.log("l'id est " + id);
    this.service.getOffreById(id).subscribe((data) => {
      this.data = Object.values(data);
    });
  }

  postulerOffre() {
    let formData = this.addForm.getRawValue();
    if (this.addForm.valid) {
      this.candidatureService.create(formData).subscribe((res) => {
        alert("L'offre a été postulé avec succès");
        console.log(formData);
      });
    } else {
      console.log('Veuillez vérifier les champs');
    }
  }
}