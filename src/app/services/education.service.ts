import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/educations/addEducation`, data);
  }
  getAll() {
    return this.http.get(`${this.apiURL}/educations/getAllEducations`);
  }

  update(data: any) {
    return this.http.put(`${this.apiURL}/educations/updateEducation/${data._id}`,data);
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/educations/deleteEducation/${id}`);
  }
}
