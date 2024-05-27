import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  apiURL=environment.apiURL
  constructor(private http:HttpClient) { }

  creerProfil(data:any){
    return this.http.post(`${this.apiURL}/profil/creerProfil`,data)
  };
  getProfils(){
    return this.http.get(`${this.apiURL}/profil/profils`)
  };
  getById(id:number){
    return this.http.get(`${this.apiURL}/profil/getProfil/${id}`);
  };
  
  updateProfil(id:number, data:any){
    return this.http.put(`${this.apiURL}/profil/updateProfil/${id}` , data)
  };

  deleteProfil(id: number) {
    return this.http.delete(`${this.apiURL}/profil/supprimerProfil/${id}`)
  };
  // modifPass(pass1: any, pass2 : any){
  //    this.http.put(`${this.apiURL}/profil/modifierMdp` ,{pass1 : pass1 , pass2 : pass2 })
  // }
  
}
