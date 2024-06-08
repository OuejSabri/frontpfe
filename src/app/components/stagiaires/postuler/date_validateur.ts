import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = new Date(control.value).setHours(0, 0, 0, 0);

    return selectedDate < today ? { futureDateInvalid: true } : null;
  };
}
 
export function dateRangeValidator(
  startDateKey: string,
  endDateKey: string
): ValidatorFn {
  return (group: AbstractControl): { [key: string]: any } | null => {
    const formGroup = group as FormGroup;
    const date_debut = formGroup.controls[startDateKey];
    const date_fin = formGroup.controls[endDateKey];

    if (date_debut && date_fin && date_debut.value > date_fin.value) {
        return { dateRangeInvalid: true };    
    }
    return null;
  };
}
