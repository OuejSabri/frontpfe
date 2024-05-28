import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiURL}/educations/add`, data, { headers });
  }
  getAll() {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiURL}/educations/`, { headers });
  }
  getExperience() {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiURL}/experiences/`, { headers });
  }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  update(data: any) {
    return this.http.put(
      `${this.apiURL}/educations/updateEducation/${data._id}`,
      data
    );
  }
  delete(id: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiURL}/educations/${id}`, { headers });
  }
}