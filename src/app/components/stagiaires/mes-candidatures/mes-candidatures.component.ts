import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { PostulerService } from 'src/app/services/postuler.service';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['./mes-candidatures.component.scss'],
})
export class MesCandidaturesComponent implements OnInit {
  data: any[] = [];
 
  constructor(private postulS: PostulerService, private candidatureService: CandidatureService, private authService: AuthService
  ) { }

  getAllCandidatures() {
    const id = this.authService.getUserId();
    this.candidatureService.getAllMesCandidatures(id)
      .subscribe((res: any) => {
        this.data = res.data
        console.log(this.data)
      });
   
  }
  ngOnInit(): void {
    this.getAllCandidatures();
  }
  supprimer(id:any){
    this.candidatureService.deleteCandidature(id).subscribe((res:any)=>{
      console.log(res)
    })
  }

}

