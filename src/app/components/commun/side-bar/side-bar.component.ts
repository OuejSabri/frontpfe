import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] = [];
  items1: MenuItem[] = [];
  items2: MenuItem[] = [];
  items3: MenuItem[] = [];
  role: any;
  constructor(
    private sAuth: AuthService,
    private router: Router,
    private sideService: SidebarService
  ) {
    this.role = sAuth.getRole();
    this.sideService.getSideBar().subscribe((res) => {
      this.sidebarVisible = res;
    });
    this.items2 = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command:()=>{
          this.router.navigate(['/dashboard/company'])
        }
      },
      {
        label: 'Liste de mes offres',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.router.navigateByUrl('/dashboard/company/mes-offres');
        },
      },
      {
        label: 'ajouter nouveau Offre',
        icon: 'pi pi-fw pi-user-plus',
        command: () => {
          this.router.navigateByUrl('/dashboard/company/offres/add');
        },
      },
      {
        label: 'liste des stagiaires',
        icon: 'pi pi-fw pi-user-plus',
        command: () => {
          this.router.navigateByUrl('/dashboard/company/liste-stagiaires');
        },
      },
      {
        label: 'Liste des candidatures',
        icon: 'pi pi-fw pi-filter',
        command: () => {
          this.router.navigateByUrl('/dashboard/company/liste-candidatures');
        },
      },
      {
        label: 'Liste des taches',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.router.navigateByUrl(
            '/dashboard/company/liste-candidatures-accepte'
          );
        },
      },
      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   command: () => {
      //     this.router.navigateByUrl('/dashboard/evenements');
      //   },
      // },
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.router.navigateByUrl('/dashboard/company/profil-societe');
        },
      },
    ];
    this.items1 = [
      {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.router.navigateByUrl('/dashboard/student');
        },
      },
      {
        label: 'mes candidatures',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.router.navigateByUrl('/dashboard/student/mes-candidatures');
        },
      },
      {
        label: 'Creer CV',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl('/dashboard/student/cv');
        },
      },
      {
        label: 'Suivi Candidature',
        icon: 'pi pi-fw pi-eye',
        command: () => {
          this.router.navigateByUrl('/dashboard/student/SuiviCandidature');
        },
      },
      {
        label: 'Parcours de stage',
        icon: 'pi pi-fw pi-server',
        command: () => {
          this.router.navigateByUrl('/dashboard/student/parcoursStage');
        },
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        command: () => {
          this.router.navigateByUrl('/dashboard/evenements');
        },
      },
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-id-card',
        command: () => {
          this.router.navigateByUrl('/dashboard/student/profil');
        },
      },
    ];
    this.items3 = [
      {
        label: 'home',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.router.navigateByUrl('/dashboard/admin');
        },
      },
      {
        label: 'Liste des stagiaires',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl('/dashboard/admin/liste-stagiaires');
        },
      },
      {
        label: 'Liste des sociétés',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.router.navigateByUrl('/dashboard/admin/liste-societes');
        },
      },
      {
        label: 'Liste des feedbacks',
        icon: 'pi pi-fw pi-comments',
        command: () => {
          this.router.navigateByUrl('/dashboard/admin/liste-feedbacks');
        },
      },
      // {
      //   label: 'Events',
      //   icon: 'pi pi-fw pi-calendar',
      //   command: () => {
      //     this.router.navigateByUrl('/dashboard/admin/');
      //   },
      // },
      // {
      //   label: 'Profil',
      //   icon: 'pi pi-fw pi-id-card',
      //   command: () => {
      //     this.router.navigateByUrl('/dashboard/admin/profil');
      //   },
      // },
    ];

    switch (this.role) {
      case 'stagiaire': {
        this.items = this.items1;
        break;
      }
      case 'societe': {
        this.items = this.items2;
        break;
      }
      case 'admin': {
        this.items = this.items3;
        break;
      }
      default: {
        this.items = this.items;
      }
    }
  }

  ngOnInit() {}

  logOut() {
    this.sAuth.logOut();
    alert('Logged out');
  }
  changeSide() {
    this.sideService.changeSideBar();
  }
}
