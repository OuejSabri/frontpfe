import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nos-entreprises',
  templateUrl: './nos-entreprises.component.html',
  styleUrls: ['./nos-entreprises.component.scss'],
})
export class NosEntreprisesComponent implements OnInit {
  data: any[] = [];
  index: any;
  constructor(private userService: UserService, private router : Router) {}
  ngOnInit(): void {
    this.getAllSociete();
  }
  getAllSociete() {
    this.userService.getAllSocietes().subscribe((res: any) => {
      this.data = Object.values(res.data);
      console.log(this.data);
    });
  }
  deleteItem(id: any) {
    this.userService.deleteUser(id).subscribe((res: any) => {
      window.location.reload();
      Swal.fire({
        title: 'succes!',
        text: 'Profile deleted',
        icon: 'success',
      });
    });
  }
  getProfilById(id: any) {
    this.router.navigateByUrl(`/dashboard/student/societeProfil/${id}`);
  }
}
