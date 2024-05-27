import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';
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
  constructor(
    private service: ProfilService,
    private authService: AuthService,
    private userService: UserService
  ) {}
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
      console.log(res.status)
      Swal.fire({
        title: 'succes!',
        text: 'Profile deleted',
        icon: 'success',
      });
    });
  }
  getProfilById(id:any){
    this.userService.getOne(id).subscribe((res:any)=>{
      console.log(res.data)
      })
  }
}
