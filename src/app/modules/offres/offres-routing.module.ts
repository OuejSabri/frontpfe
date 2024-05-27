import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosOffresComponent } from 'src/app/components/offres/nos-offres/nos-offres.component';

const routes: Routes = [
  {
    path: '',
    component: NosOffresComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffresRoutingModule {}
