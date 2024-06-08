import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}
  createAffectation(data: any) {
    return this.http.post(`${this.apiURL}/assignments/createAssignment`, data);
  }
  createRapport(data: any) {
    return this.http.post(`${this.apiURL}/rapports/upload`, data);
  }
  createAttestation(data: any) {
    return this.http.post(`${this.apiURL}/attestations`, data);
  }
  getAssignment(id: any) {
    return this.http.get(`${this.apiURL}/assignments/getAssignment/${id}`);
  }
  getRapport(id: any) {
    return this.http.get(`${this.apiURL}/rapports/rapport/${id}`);
  }
  getAttestation(id: any) {
    return this.http.get(`${this.apiURL}/attestations/${id}`);
  }
  getAllAssignments() {
    return this.http.get(`${this.apiURL}/assignments/getAllAssignments`);
  }

  generateAtestation(id: any) {
    return this.http.get(
      `${this.apiURL}/attestations/generateAttestation/${id}`
    );
  }
  downloadAttestation(id: any): Observable<Blob> {
    return this.http.get(
      `${this.apiURL}/attestations/downloadAttestation/${id}`,
      { responseType: 'blob' }
    );
  }

  generateAffectation(id: any) {
    return this.http.get(
      `${this.apiURL}/affectations/generateAffectation/${id}`
    );
  }
  downloadAffectation(id: any): Observable<Blob> {
    return this.http.get(
      `${this.apiURL}/affectations/downloadAffectation/${id}`,
      { responseType: 'blob' }
    );
  }
}
