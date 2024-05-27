import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private feedbackS: FeedbackService) {}
  ngOnInit() {
    this.getAllfeedbacks();

     this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    
  
  getAllfeedbacks() {
    this.feedbackS.getAllFeedback().subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
    });
  }
  
}
