import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators extends Validators {
    // Validador personalizado para la comparacion de las contraseñas
    static passwordMatchValidator(firstNameControl: string, secondNameControl: string): ValidatorFn {
        return (group: AbstractControl): ValidationErrors | null => {
            const firsControl = group.get('password1');
            const secondControl = group.get('password2');
            return firsControl?.value === secondControl?.value ? null : { passwordMismatch: true };
        }
    }
}
