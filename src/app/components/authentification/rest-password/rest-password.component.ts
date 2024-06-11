import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss'],
})
export class RestPasswordComponent implements OnInit {
  addForm!: FormGroup;
  token!: string;
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.addForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmNewPassword: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.token = param.resetToken;
    });
  }

  resetPassword() {
    if (this.addForm.valid) {
      // const formData = this.addForm.value;
      let formData = this.addForm.getRawValue();
      this.authService.resetPassword(formData).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Réinitialisation du mot de passe réussie',
            text: 'Votre mot de passe a été réinitialisé avec succès.',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/auth']);
            }
          });
        },
        (error) => {
          console.error('Échec de la réinitialisation du mot de passe:', error);
          this.error =
            error.error.message ||
            'Échec de la réinitialisation du mot de passe. Veuillez réessayer plus tard.';
        }
      );
    } else {
      this.error = 'Veuillez remplir tous les champs correctement.';
    }
  }
}
