import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/candidatures`, data);
  }
  accepterCandidature(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/accepter/${id}`, {});
  }
  refuserCandidature(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/refuser/${id}`, {});
  }
  deleteCandidature(id: any) {
    return this.http.delete(`${this.apiURL}/candidatures/${id}`);
  }
  getCandidature(is: any) {
    return this.http.get(`${this.apiURL}/candidatures/candidature/${is}`);
  }
  accept(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/${id}/accept`, {});
  }

  reject(id: any) {
    return this.http.put(`${this.apiURL}/candidatures/${id}/reject`, {});
  }

  getAll() {
    return this.http.get(`${this.apiURL}/candidatures`);
  }
  getAllMesCandidatures(id: any) {
    return this.http.get(
      `${this.apiURL}/candidatures/getAllMesCandidatures/${id}`
    );
  }
  getMesCandidatures(id: any) {
    return this.http.get(
      `${this.apiURL}/candidatures/getMesCandidatures/${id}`
    );
  }
  accepted() {
    return this.http.get(`${this.apiURL}/candidatures/accepted`);
  }


  
  acceptedById(id: any) {
    return this.http.get(`${this.apiURL}/candidatures/accepted/${id}`);
  }
  acceptById(id: any) {
    return this.http.get(`${this.apiURL}/candidatures/${id}`);
  }
}