import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-liste-societe',
  templateUrl: './liste-societe.component.html',
  styleUrls: ['./liste-societe.component.scss'],
})
export class ListeSocieteComponent {
  responsiveOptions: any;
  data: any;
  constructor(private serviceUser: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getAllSociete();

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

  getAllSociete() {
    this.serviceUser.getAllSocietes().subscribe((res: any) => {
      this.data = Object.values(res.data);
      console.log(this.data);
    });
  }
  getProfilById(id: any) {
    this.router.navigateByUrl(`/dashboard/student/societeProfil/${id}`);
  }
}
