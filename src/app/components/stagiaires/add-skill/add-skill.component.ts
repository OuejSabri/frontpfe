import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss'],
})
export class AddSkillComponent {
  educationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private educationService: SkillService,
    private messageService: MessageService
  ) {
    this.educationForm = this.formBuilder.group({
      nom: ['', Validators.required],
      niveau: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.create(this.educationForm.value).subscribe(
        (response) => {
          
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Votre skill ajouter avec succès.',
          });
          console.log('Skills added successfully', response);
          window.location.reload();
          // Vous pouvez ajouter du code ici pour réinitialiser le formulaire ou afficher un message de succès
        },
        (error) => {
          console.error('Error adding Skills', error);
          // Vous pouvez ajouter du code ici pour gérer les erreurs
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}


