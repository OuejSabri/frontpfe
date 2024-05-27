import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { TacheService } from 'src/app/services/tache.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem,} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-suivi-candidature',
  templateUrl: './suivi-candidature.component.html',
  styleUrls: ['./suivi-candidature.component.scss'],
})
export class SuiviCandidatureComponent implements OnInit {
  idUser: any;
  candidature: any;

  currentUserId: any;
  candidaId: any;
  pendingTask: any[] = [];
  progressTask: any[] = [];
  completedTask: any[] = [];
  constructor(
    private candidaService: CandidatureService,
    private authService: AuthService,
    private tachService: TacheService
  ) {
    this.idUser = this.authService.getUserId();
  }
  ngOnInit(): void {
    this.getDetailleCandidates();
  }

  getDetailleCandidates() {
    this.candidaService.acceptedById(this.idUser).subscribe((res: any) => {
      this.candidature = res.data;
      console.log(this.candidature);
      this.getTasks(this.candidature._id);
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let data = {
        status: event.container.id,
      };
      this.tachService
        .updateTask(data, event.item.data._id)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  getTasks(id: any) {
    this.tachService.getTaskByIdOffre(id).subscribe((res: any) => {
      console.log(res);
      this.pendingTask = res.data.filter((t: any) => t.status === 'Todo');
      this.progressTask = res.data.filter(
        (t: any) => t.status === 'InProgress'
      );
      this.completedTask = res.data.filter((t: any) => t.status === 'Done');
    });
  }
}
