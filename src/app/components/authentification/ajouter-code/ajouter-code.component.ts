import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ajouter-code',
  templateUrl: './ajouter-code.component.html',
  styleUrls: ['./ajouter-code.component.scss']
})
export class AjouterCodeComponent {
  email!: string;
  otpCode!: number; // Ensure this is treated as a number
  newPassword!: string;
  message!: string;

  constructor(private sAuth: AuthService, private router: Router, private route: ActivatedRoute,) {}

  verifyAndResetPassword() {
    if (!this.email || !this.otpCode) {
      console.error('Email or OTP code is missing');
      // Provide feedback to the user about the missing email or OTP code
      return;
    }
  
    console.log("Email:", this.email);
    console.log("Reset Code:", this.otpCode);
  
    this.sAuth.verifyResetCode(this.email, this.otpCode).subscribe(
      (res) => {
        console.log(res.message);
        window.alert('Votre Code OTP a été validé avec succès');
  
       // Retrieve the token from local storage
const token = localStorage.getItem('accessToken');

// Check if token exists
if (token) {
    console.log(token);

    // Navigate using the retrieved token
    this.router.navigate(['/auth/resetPassword', token]);
} else {
    // Handle the case where token doesn't exist in local storage
    console.error('Token not found in local storage');
    // Redirect to some other page or display an error message
}

      },
      (err) => {
        console.error('Erreur lors de la vérification du code OTP :', err);
        this.message = 'Code OTP invalide ou expiré.';
      }
    );
  }
  

 
}