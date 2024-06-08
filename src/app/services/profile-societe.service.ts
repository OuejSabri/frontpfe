import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ProfileSocieteService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  creerProfileSociete(data: any) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.post(`${this.apiURL}/profil/creerProfilSociete`, data, {
      headers,
    });
  }
  getSocieteProfils() {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/getSocieteProfils`, {
      headers,
    });
  }
  getSocieteById(id: number) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/getProfileSociete/${id}`, {
      headers,
    });
  }
  getProfSociete(id: number) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/getProfSociete/${id}`, {
      headers,
    });
  }
  updateSocieteProfil(id: number, data: any) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.put(
      `${this.apiURL}/profil/updateProfileSociete/${id}`,
      data,
      {
        headers,
      }
    );
  }
}

