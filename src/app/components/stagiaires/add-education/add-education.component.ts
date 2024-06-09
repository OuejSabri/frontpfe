import { Component, Inject } from '@angular/core';
import { CVComponent } from '../cv/cv.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/services/education.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss']
})
export class AddEducationComponent {
  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private educationService: EducationService) {
    this.educationForm = this.formBuilder.group({
      institut: ['', Validators.required],
      domaineEtude: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.create(this.educationForm.value).subscribe(
        response => {
          window.alert('Education added successfullys')
          console.log('Education added successfully', response);
          window.location.reload();
          // Vous pouvez ajouter du code ici pour réinitialiser le formulaire ou afficher un message de succès
        },
        error => {
          console.error('Error adding education', error);
          // Vous pouvez ajouter du code ici pour gérer les erreurs
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}