import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TacheService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  createTask(data: any) {
    return this.http.post(`${this.apiURL}/taches`, data);
  }
  getAllTasks() {
    return this.http.get(`${this.apiURL}/taches`);
  }
  getTaskById(id: any) {
    return this.http.get(`${this.apiURL}/taches/${id}`);
  }
  getTaskByIdOffre(id: any) {
    return this.http.get(`${this.apiURL}/taches/byoffre/${id}`);
  }
  updateTask(data: any, id: any) {
    return this.http.put(`${this.apiURL}/taches/${id}`, data);
  }
  deleteTask(id: any) {
    return this.http.delete(`${this.apiURL}/taches/${id}`);
  }
}
