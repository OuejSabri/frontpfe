import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/skills/addSkill`, data);
  }
  getAll() {
    return this.http.get(`${this.apiURL}/skills/getAllSkills`);
  }

  update(data: any) {
    return this.http.put(
      `${this.apiURL}/skills/updateSkill/${data._id}`,
      data
    );
  }
  delete(id: any) {
    return this.http.delete(
      `${this.apiURL}/skills/deleteSkill/${id}`
    );
  }
}
