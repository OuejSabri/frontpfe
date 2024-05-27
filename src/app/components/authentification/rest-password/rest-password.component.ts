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
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.token = param.resetToken;
    });

    this.addForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmNewPassword: new FormControl('', Validators.required),
    });
  }

  resetPassword() {
    if (this.addForm.valid) {
      const formData = this.addForm.value;
      this.authService.resetPassword(formData).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Password Reset Successful',
            text: 'Your password has been reset successfully.',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/auth']);
            }
          });
        },
        (error) => {
          console.error('Password reset failed:', error);
          this.error = error.error.message || 'Password reset failed. Please try again later.';
        }
      );
    } else {
      this.error = 'Please fill out all fields correctly.';
    }
  }
}
