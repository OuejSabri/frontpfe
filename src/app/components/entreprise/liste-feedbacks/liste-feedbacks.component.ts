import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

export interface Comment {
  image?: string;
  nom?: string;
  email?: string;
  date?: string;
  commentaire?: string;
}
@Component({
  selector: 'app-liste-feedbacks',
  templateUrl: './liste-feedbacks.component.html',
  styleUrls: ['./liste-feedbacks.component.scss'],
})
export class ListeFeedbacksComponent implements OnInit {
  data: any;
  responsiveOptions: any[] | undefined;
  @Input() comments: Comment[] = [];

  rowCount = 3;
  addForm: FormGroup;


  constructor(private feedbackS: FeedbackService, ) {
    this.addForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      commentaire: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.getAllfeedbacks();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getAllfeedbacks() {
    this.feedbackS.getAllFeedback().subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
  envoyerFeedback() {
    let data = this.addForm.getRawValue();
    if (this.addForm.valid) {
      this.feedbackS.envoyerFeedback(data).subscribe((res) => {
        alert('le feedBack a été envoyé avec succès');
        console.log(data);
      });
    } else {
      console.log('form invalide');
    }
  }
}
