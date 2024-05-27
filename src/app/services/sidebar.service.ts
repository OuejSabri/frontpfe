import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sideBarToogle:BehaviorSubject<boolean>=new BehaviorSubject(false)
  constructor() { }

  changeSideBar(){
    this.sideBarToogle.next(!this.sideBarToogle.value)
    console.log(this.sideBarToogle.value)
  
  }
  getSideBar(){
    return this.sideBarToogle.asObservable()
  }
}
