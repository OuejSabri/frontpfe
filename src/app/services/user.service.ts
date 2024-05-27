import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get(`${this.apiURL}/auth/getAll`);
  }
  getAllStagiaires() {
    return this.http.get(`${this.apiURL}/auth/getAllStagiaires`);
  }
  getAllSocietes() {
    return this.http.get(`${this.apiURL}/auth/getAllSocietes`);
  }
  getOne(id: any) {
    return this.http.get(`${this.apiURL}/auth/getOne/${id}`);
  }
  updateUser(data: any, id: any) {
    return this.http.put(`${this.apiURL}/auth/update/${id}`, data);
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.apiURL}/auth/${id}`);
  }
}
