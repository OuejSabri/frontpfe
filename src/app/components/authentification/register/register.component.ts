import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  addForm: FormGroup;
  idUser: any;
  constructor(
    private sAuth: AuthService,
    private router: Router,
  ) {
    this.addForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl(''),
      telephone: new FormControl('', [Validators.pattern('^[0-9]')]),
      password: new FormControl(''),
      rep_password: new FormControl(''),
      user: new FormControl(this.idUser),
    });
  }

  ngOnInit(): void {}

  register() {
    let data = this.addForm.getRawValue();
    if (data.password !== data.rep_password) {
      swal.fire({
        title: 'Erreur!',
        text: "mot de passe n'est pas identique",
        icon: 'error',
      });
      return;
    } else {
      this.sAuth.register(data).subscribe(
        (res) => {
          if (res) {
            this.router.navigateByUrl('/auth');
            swal.fire({
              title: 'succes!',
              text: 'merci pour votre inscription',
              icon: 'success',
            });
          }
        },
        (err) => {
          swal.fire({
            title: 'Erreur!',
            text: "un erreur  à l'inscription",
            icon: 'error',
          });
          return;
        }
      );
    }
  }
}
