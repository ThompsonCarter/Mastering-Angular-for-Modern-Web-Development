import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { UserService } from './user.service';

export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return userService.checkEmail(control.value).pipe(
      map(isTaken => (isTaken ? { emailTaken: true } : null))
    );
  };
}
