import { AbstractControl } from "@angular/forms";
import { ValidatorFn } from "@angular/forms";

export function AgeValidator(minAge : number) : ValidatorFn {
  return (control : AbstractControl) => {
    let value = control.value
    let bdate : Date = new Date(value)
    if((new Date().getFullYear() - minAge) >= bdate.getFullYear())
      return null
    else return {AgeError : 'Tu es trop jeune'}
  }
}
