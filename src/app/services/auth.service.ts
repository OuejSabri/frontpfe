import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as  moment from 'moment';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): void {
    this.http.post(`${this.apiURL}/auth/login`, data).subscribe(
      (res: any) => {
        if (res && res.accessToken) {
          // Vérification de la présence du token dans la réponse
          this.setSession(res.accessToken);
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
          alert('Une erreur est survenue lors de la connexion.');
        }
      },
      (err) => {
        console.error('Login error:', err);
        alert('Vérifiez vos données !!');
      }
    );
  }

  register(data: any) {
    return this.http.post(`${this.apiURL}/auth/register`, data);
  }

  logOut() {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('idUser');
    sessionStorage.removeItem('expires_at');
    this.router.navigateByUrl('/auth');
  }

  public isLoggedIn() {
    if (this.getExpiration()) {
      return moment(this.getExpiration()).isBefore();
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration!);
    return moment(expiresAt);
  }
  getUserId() {
    let token = sessionStorage.getItem('accessToken') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
    return decodedToken?.id;
  }
  getRole() {
    let token = sessionStorage.getItem('accessToken') || '';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken, token);
    return decodedToken?.role;
  }
  getUserIdByToken(): string | null {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken.id;
    }
    return null;
  }
  forgotPassword(email: string): Observable<void> {
    return this.http.post<void>(`${this.apiURL}/auth/forgotPassword`, {
      email,
    });
  }
  resetPassword( data: any) {
    return this.http.put(`${this.apiURL}/auth/resetPassword`, data);
  }
  verifyResetCode(email: string, otpCode: number): Observable<any> {
    return this.http.post(`${this.apiURL}/auth/verify-resetCode`, { email, otpCode });
  }
  
  modifierPassword(id: any, data: any) {
    return this.http.put(`${this.apiURL}/auth/modifierPassword/${id}`, data);
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');
    sessionStorage.setItem('accessToken', authResult);
    console.log(authResult)
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}
