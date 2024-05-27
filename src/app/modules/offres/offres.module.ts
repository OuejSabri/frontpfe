import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffresRoutingModule } from './offres-routing.module';
import { NosOffresComponent } from 'src/app/components/offres/nos-offres/nos-offres.component';
import { PrimeNgModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NosOffresComponent],
  imports: [
    CommonModule,
    OffresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffresModule {}
