import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  creerProfil(data: any) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.post(`${this.apiURL}/profil/creerProfil`, data, {
      headers,
    });
  }

  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  getProfils() {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/profils`, { headers });
  }
  getById(id: number) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/getProfil/${id}`, { headers });
  }
  getProfil(id: any) {
    return this.http.get(`${this.apiURL}/profil/getProfil/${id}`);
  }
  getOne(id: any) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/profil/getOne/${id}`, { headers });
  }
  updateProfil(id: number, data: any) {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.put(`${this.apiURL}/profil/updateProfil/${id}`, data, {
      headers,
    });
  }

  deleteProfil(id: number) {
    return this.http.delete(`${this.apiURL}/profil/supprimerProfil/${id}`);
  }
  // modifPass(pass1: any, pass2 : any){
  //    this.http.put(`${this.apiURL}/profil/modifierMdp` ,{pass1 : pass1 , pass2 : pass2 })
  // }
}
