import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.scss']
})
export class AddExperienceComponent {
  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private educationService: ExperienceService, private messageService : MessageService) {
    this.educationForm = this.formBuilder.group({
      entreprise: ['', Validators.required],
      poste: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.create(this.educationForm.value).subscribe(
        response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Votre Experience a été ajouté avec succès.',
          });
          console.log('Experience added successfully', response);
          window.location.reload();
          // Vous pouvez ajouter du code ici pour réinitialiser le formulaire ou afficher un message de succès
        },
        error => {
          console.error('Error adding Experience', error);
          // Vous pouvez ajouter du code ici pour gérer les erreurs
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
