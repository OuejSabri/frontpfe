import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  addForm: FormGroup ;
  constructor(private feedbackS : FeedbackService) {
  this.addForm = new FormGroup({
    "nom": new FormControl('',Validators.required),
    "email" :new FormControl('',Validators.required),
    "commentaire" : new FormControl('',Validators.required)
  });
  }
   ngOnInit(): void {
  }

  envoyerFeedback(){
    let data =this.addForm.getRawValue()
    if(this.addForm.valid) {
      this.feedbackS.envoyerFeedback(data).subscribe((res)=>{
        alert("le feedBack a été envoyé avec succès");
        console.log(data);});
    }else{
      console.log("form invalide");
    }
  };

  getAllOffres(){
    this.feedbackS.getAllFeedback().subscribe((res)=>console.log(res))
  };
  getOffreById(id: number){
    this.feedbackS.getFeedbackById(id).subscribe((res)=> console.log(res));
  };

  async deleteOffre(id: number){
    if (window.confirm('Voulez vous supprimer cette feedback ?')){
      try {
        await this.feedbackS.deleteFeedback(id);
        alert("La suppression de feedback a bien eu lieu");
      } catch (error) {
        console.error("Une erreur s'est produite lors de la suppression de feedback :", error);
      }
  }
  };

  updateOffre(id: number, data : any){
    this.feedbackS.updateFeedback(id, data).subscribe((res)=>{
      console.log(res);
      alert("le feedback à été modifiée avec succès");
    },err =>{
      alert("Erreur lors de la modification de feedback")
    })
  };


}
