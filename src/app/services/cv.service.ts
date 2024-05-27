import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/cvs/deleteCv/${id}`);
  }
}
