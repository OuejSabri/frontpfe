import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/experiences/addExperience`,data);
  }
  getAll() {
    return this.http.get(`${this.apiURL}/experiences/getAllExperiences`);
  }

  update(data: any) {
    return this.http.put(`${this.apiURL}/experiences/updateExperience/${data._id}`,data);
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/experiences/deleteExperience/${id}`);
  }
}
