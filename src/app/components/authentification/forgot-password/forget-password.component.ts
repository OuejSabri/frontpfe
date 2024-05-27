import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  email!: string;
  message!: string;
  constructor(private sAuth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.sAuth.forgotPassword(this.email).subscribe(
      () => {
        // this.router.navigateByUrl('/auth/resetPassword');
        this.message =
          'Nous vous avons envoyé un lien de réinitialisation de mot de passe';
        alert(
          'Nous vous avons envoyé un lien de réinitialisation de mot de passe'
        );
        this.router.navigateByUrl('/auth/AjouterCode');
      },
      (error) => {
        console.error(
          "Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe :",
          error
        );
        this.message =
          "Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe";
      }
    );
  }
}
