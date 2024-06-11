import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OffreService {
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}

  createOffre(data: any) {
    return this.http.post(`${this.apiURL}/offre/publierOffre`, data);
  }

  getAllOffre() {
    return this.http.get(`${this.apiURL}/offre/getAllOffres`);
  }
  getP(searchTerm: string = ''): Observable<any> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('domaine', searchTerm);
    }
    return this.http.get<any>(`${this.apiURL}/offre/findAll`, { params }).pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
  getOffreById(id: number) {
    return this.http.get(`${this.apiURL}/offre/getOneOffre/${id}`);
  }

  updateOffre(id: number, data: any) {
    return this.http.put(`${this.apiURL}/offre/modifierOffre/${id}`, data);
  }

  deleteOffre(id: number) {
    return this.http.delete(`${this.apiURL}/offre/supprimerOffre/${id}`);
  }

  getOffresByidSociete(id: any) {
    return this.http.get(`${this.apiURL}/offre/getAllMesOffres/${id}`);
  }

  searchOffers(searchCriteria: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/offre/search-offers`,
      searchCriteria
    );
  }
}
