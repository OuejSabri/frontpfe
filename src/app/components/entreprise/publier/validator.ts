import { AbstractControl } from '@angular/forms';

export function futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
  const currentDate = new Date();
  const inputDate = new Date(control.value);

  return inputDate && inputDate > currentDate ? null : { futureDateInvalid: true };
}
