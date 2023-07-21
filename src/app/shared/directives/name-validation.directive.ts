import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appNameValidation]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: NameValidationDirective, multi: true
  }]
})
export class NameValidationDirective {

  constructor() { }

}
