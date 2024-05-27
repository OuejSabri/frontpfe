import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  apiURL=environment.apiURL
  constructor(private http:HttpClient) { }

  createSociete(data:any){
    return this.http.post(`${this.apiURL}/societe/creerSociete`,data)
  }

  getAllSociete(){
    return this.http.get(`${this.apiURL}/societe/allSociete`)
  }
  getById(id:number){
    return this.http.get(`${this.apiURL}/societe/getSociete/${id}`);
  }
  
  updateSociete(id:number, data:any){
    return this.http.put(`${this.apiURL}/societe/updateSociete/${id}` , data)
  }

  deleteSociete(id: number) {
    return this.http.delete(`${this.apiURL}/societe/supprimerSociete/${id}`)
  }
}
