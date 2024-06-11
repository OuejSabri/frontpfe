import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CertificationService } from 'src/app/services/certification.service';

@Component({
  selector: 'app-add-certificat',
  templateUrl: './add-certificat.component.html',
  styleUrls: ['./add-certificat.component.scss']
})
export class AddCertificatComponent {

  educationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private educationService: CertificationService, private messageService : MessageService) {
    this.educationForm = this.formBuilder.group({
      domain: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.create(this.educationForm.value).subscribe(
        response => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Votre Certificat a été ajouté avec succès.',
          });
          window.alert(' added successfullys')
          console.log('Certificat added successfully', response);
          window.location.reload();
          // Vous pouvez ajouter du code ici pour réinitialiser le formulaire ou afficher un message de succès
        },
        error => {
          console.error('Error adding Certificat', error);
          // Vous pouvez ajouter du code ici pour gérer les erreurs
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
