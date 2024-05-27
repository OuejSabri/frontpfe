import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(`${this.apiURL}/projets/addProjet`, data);
  }
  getAll() {
    return this.http.get(`${this.apiURL}/projets/getAllProjets`);
  }

  update(data: any) {
    return this.http.put(
      `${this.apiURL}/projets/updateProjet/${data._id}`,
      data
    );
  }
  delete(id: any) {
    return this.http.delete(
      `${this.apiURL}/projets/deleteProjet/${id}`
    );
  }
}
