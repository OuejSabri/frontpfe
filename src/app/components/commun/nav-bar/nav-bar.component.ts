import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private sAuth: AuthService,
    private sideService:SidebarService
  ) {

    // let role = sessionStorage.getItem('role');
    
  }
  ngOnInit() {}

  logOut() {
    this.sAuth.logOut();
    alert('Logged out');
  }

  toggleSideBar(){
    this.sideService.changeSideBar()
  }


  
}
