import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { OffreService } from 'src/app/services/offre.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { dateRangeValidator, futureDateValidator } from './date_validateur';
@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.scss'],
})
export class PostulerComponent implements OnInit {
  addForm: FormGroup;
  data: any;
  postDetail: any;
  idPost: any;
  curretnUserId: any;
  curretnUser: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private service: OffreService,
    private acttivatedRoot: ActivatedRoute,
    private authService: AuthService,
    private candidatureService: CandidatureService,
    private router: Router
  ) {
    this.curretnUserId = this.authService.getUserId();

    this.acttivatedRoot.params.subscribe((param: any) => {
      this.idPost = param.id;
    });
    this.addForm = this.fb.group(
      {
        stagiaire: new FormControl(this.curretnUserId),
        offreStage: new FormControl(this.idPost),
        nom: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        cv: new FormControl('', Validators.required),
        lettre_motivation: new FormControl('', Validators.required),
        datePostulation: new FormControl(Date.now()),
        date_debut: new FormControl('', [
          Validators.required,
          futureDateValidator(),
        ]),
        date_fin: new FormControl('', Validators.required),
      },
      { validators: dateRangeValidator('date_debut', 'date_fin') }
    );
  }

  ngOnInit(): void {
    this.curretnUser = this.userService.getuser().subscribe((res: any) => {
      this.postDetail = res.data;
      this.addForm.patchValue(this.postDetail);
    });
    this.service.getOffreById(this.idPost).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
    console.log(this.curretnUser);
  }

  getOffreById(id: number) {
    this.service.getOffreById(id).subscribe((data) => {
      this.data = Object.values(data);
    });
  }

  postulerOffre() {
    let formData = this.addForm.getRawValue();
    if (this.addForm.valid) {
      this.candidatureService.create(formData).subscribe((res) => {
        Swal.fire({
          title: 'succes!',
          text: "L'offre a été postulé avec succès",
          icon: 'success',
        });
        window.location.reload();
      });
    } else {
      this.addForm.markAllAsTouched();
      console.log('Veuillez vérifier les champs');
      return;
    }
  }
  navigateToCvCreation() {
    this.router.navigateByUrl('/dashboard/student/cv');
    // this.router.navigate(['/dashboard/student/cv']);
  }
  showCvInfo() {
    // const modal = new bootstrap.Modal(document.getElementById('infoModal'));
    // modal.show();
  }
}
