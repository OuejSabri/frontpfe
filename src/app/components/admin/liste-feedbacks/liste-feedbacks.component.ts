import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-feedbacks',
  templateUrl: './liste-feedbacks.component.html',
  styleUrls: ['./liste-feedbacks.component.scss'],
})
export class ListeFeedbacksComponent implements OnInit {
  data: any;

  constructor(private feedbackS: FeedbackService, private router: Router) {}
  ngOnInit() {
    this.getAllfeedbacks();
  }
  getAllfeedbacks() {
    this.feedbackS.getAllFeedback().subscribe((res: any) => {
      this.data = res.data;
      console.log(this.data);
    });
  }

  deleteItem(id: any) {
    this.feedbackS.deleteFeedback(id).subscribe((res: any) => {
      console.log(res)
      Swal.fire({
            title: 'succes!',
            text: "L'offre a été ajoutée avec succès",
            icon: 'success',
          });
          this.router.navigateByUrl('dashboard/admin/liste-feedbacks');
        })
      }
}
