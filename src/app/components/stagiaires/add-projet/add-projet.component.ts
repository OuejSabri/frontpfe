import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent {

  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private educationService: ProjetService, private  messageService :MessageService) {
    this.educationForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.create(this.educationForm.value).subscribe(
        response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Projet ajouter avec succès.',
          });
          console.log('Projet added successfully', response);
          window.location.reload();
          // Vous pouvez ajouter du code ici pour réinitialiser le formulaire ou afficher un message de succès
        },
        error => {
          console.error('Error adding Projet', error);
          // Vous pouvez ajouter du code ici pour gérer les erreurs
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}

