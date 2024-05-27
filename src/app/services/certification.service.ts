import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CertificationService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/certifications/addCertification`, data);
  }
  getAll() {
    return this.http.get(`${this.apiURL}/certifications/getAllCertifications`);
  }
  
  update(data: any) {
    return this.http.put(
      `${this.apiURL}/certifications/updateCertification/${data._id}`,
      data
    );
  }
  delete(id: any) {
    return this.http.delete(`${this.apiURL}/certifications/deleteCertification/${id}`);
  }
}
