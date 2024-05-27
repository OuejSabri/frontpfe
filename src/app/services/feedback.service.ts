import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiURL=environment.apiURL
  constructor(private http :HttpClient) { }
  
  envoyerFeedback(data:any){
    return this.http.post(`${this.apiURL}/feedback/creerFeedback`,data)
  };

  getAllFeedback(){
    return this.http.get(`${this.apiURL}/feedback/allFeedback`);
  };
  getFeedbackById(id:number){
    return this.http.get(`${this.apiURL}/feedback/getFeedback/${id}`);
  };

  updateFeedback(id:number, data:any){
    return this.http.put(`${this.apiURL}/feedback/updateFeedback/${id}`, data)
  };

  async deleteFeedback(id: number) {
    return this.http.delete(`${this.apiURL}/feedback/supprimerFeedback/${id}`)
  };
}
