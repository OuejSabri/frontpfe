import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostulerService {
  apiURL=environment.apiURL
  constructor(private http :HttpClient) { }
  
  postulerOffre(data:any){
    return this.http.post(`${this.apiURL}/offre/postulerOffre`,data)
  };

  getAllPostulations(){
    return this.http.get(`${this.apiURL}/offre/allPostulations`)
  };
  
  updatePostulation(id:number, data:any){
    return this.http.put(`${this.apiURL}/offre/modifierPostul/${id}` , data)
  };
  async deletePostulation(id: number) {
    try {
      const response = await this.http.delete(`${this.apiURL}/offre/supprimerPostul/${id}`)
        .toPromise();
      console.log(response);
    } catch (error) {
      console.log('Error', error);
    }
  }
}
