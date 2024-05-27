import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatureService } from 'src/app/services/candidature.service';
import { TacheService } from 'src/app/services/tache.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.scss'],
})
export class ListeTachesComponent implements OnInit {
  addForm!: FormGroup
  currentUserId:any
  candidaId:any
  candidature:any
  pendingTask: any[] = []
  progressTask: any[] = []
  completedTask: any[] = []
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  constructor(
    private activRoute:ActivatedRoute,
    private candidatureService:CandidatureService,
    private taskService:TacheService,
    private authService:AuthService,

  )
  {
    this.addForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
    })
    this.activRoute.params.subscribe((param:any)=>{
      this.candidaId = param.id
      console.log(this.candidaId)
    })
    this.currentUserId = this.authService.getUserId()

    
    
  }

  ngOnInit(): void {
    console.log(this.candidaId)
    this.candidatureService.acceptById(this.candidaId).subscribe((res:any)=>{
      this.candidature = res.data
      console.log(res)
      this.getTasks(this.candidature?._id)
    })
    
  }

  submit() {
    let data= this.addForm.getRawValue()
    data.candidature=this.candidaId
    data.userId=this.currentUserId 
    this.taskService.createTask(data).subscribe((res:any)=>{
      this.pendingTask.push(res.data)
      this.addForm.reset()
    })

  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let data={
        status:event.container.id,
      }
      this.taskService.updateTask(data,event.item.data._id).subscribe((res)=>{
        console.log(res)
      })
    }
  }

  getTasks(id:any){
    this.taskService.getTaskByIdOffre(id).subscribe((res:any)=>{
      console.log(res)
      this.pendingTask = res.data.filter((t:any) => t.status === 'Todo')
      this.progressTask = res.data.filter((t:any) => t.status === 'InProgress')
      this.completedTask = res.data.filter((t:any) => t.status === 'Done')
    })
  }
}
