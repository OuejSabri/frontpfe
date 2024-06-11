import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  addForm: FormGroup;
  constructor(private sAuth: AuthService, private router: Router) {
    this.addForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {}

  login() {
    let data = this.addForm.getRawValue();
    this.sAuth.login(data).subscribe(
      (res: any) => {
        if (res && res.accessToken) {
          // Vérification de la présence du token dans la réponse
          this.sAuth.setSession(res.accessToken);
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(res.accessToken);
          console.log(decodedToken);
          localStorage.setItem('accessToken', res.accessToken);

          Swal.fire({
            title: 'Succès!',
            text: 'Merci pour votre connexion',
            icon: 'success',
          });

          switch (decodedToken?.role) {
            case 'societe':
              this.router.navigateByUrl('/dashboard/company');
              break;
            case 'stagiaire':
              this.router.navigateByUrl('/dashboard/student');
              break;
            case 'admin':
              this.router.navigateByUrl('/dashboard/admin');
              break;
            default:
              this.router.navigateByUrl('/');
              break;
          }
        } else {
          Swal.fire({
            title: 'Erreur!',
            text: 'Une erreur est survenue lors de la connexion.',
            icon: 'error',
          });
          return;
        }
      },
      (err) => {
        Swal.fire({
          title: 'Erreur!',
          text: "Verifier votre email et mot de passe !",
          icon: 'error',
        });
        return;
      }
    );
  }
}
