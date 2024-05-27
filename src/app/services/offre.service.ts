import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  apiURL=environment.apiURL
  constructor(private http :HttpClient) {
   }
  
  createOffre(data:any){
    return this.http.post(`${this.apiURL}/offre/publierOffre`,data)
  };

  getAllOffre(){
    return this.http.get(`${this.apiURL}/offre/getAllOffres`);
  };
  getOffreById(id:number){
    return this.http.get(`${this.apiURL}/offre/getOneOffre/${id}`);
  };

  updateOffre(id:number, data:any){
    return this.http.put(`${this.apiURL}/offre/modifierOffre/${id}`, data)
  };

   deleteOffre(id: number) {
    return this.http.delete(`${this.apiURL}/offre/supprimerOffre/${id}`)
  };


  getOffresByidSociete(id:any){
    return this.http.get(`${this.apiURL}/offre/getAllMesOffres/${id}`);
  }
     
}
