import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiURL}/cvs/getAllCvs`);
  }
  create(data: any) {
    return this.http.post(`${this.apiURL}/cvs/addCv`, data);
  }
  update(data: any, id: any) {
    return this.http.put(`${this.apiURL}/cvs/updateCv/${id}`, data);
  }
  generateresume() {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/cvs/generate-resume`, { headers });
  }
  downloadresume(): Observable<Blob> {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    return this.http.get(`${this.apiURL}/cvs/download-resume`, {
      headers,
      responseType: 'blob',
    });
  }
  downloadthisresume(id:any): Observable<Blob> {
    const accessToken = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${accessToken}`
    ); 
    return this.http.get(`${this.apiURL}/cvs/downloadTHISresume/${id}`, {
      headers,
      responseType: 'blob',
    });
  }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/cvs/deleteCv/${id}`);
  }
}
