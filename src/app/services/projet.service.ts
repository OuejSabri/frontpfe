import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  create(data: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiURL}/projets/add`, data, { headers });
  }

  getProjet() {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiURL}/projets/`, { headers });
  }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }
  update(data: any) {
    return this.http.put(
      `${this.apiURL}/projets/updateProjet/${data._id}`,
      data
    );
  }

  delete(id: any) {
    const token = this.getTokenFromLocalStorage();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiURL}/projets/${id}`, { headers });
  }
}
