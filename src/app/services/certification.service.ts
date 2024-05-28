import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiURL}/certifications/add`, data, {
      headers,
    });
  }
  getAll() {
    return this.http.get(`${this.apiURL}/certifications/getAllCertifications`);
  }
  getCertificat() {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiURL}/certifications/`, { headers });
  }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  update(data: any) {
    return this.http.put(
      `${this.apiURL}/certifications/updateCertification/${data._id}`,
      data
    );
  }

  delete(id: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiURL}/certifications/${id}`, { headers });
  }
}
