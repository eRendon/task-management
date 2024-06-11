import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(form: FormGroup): ValidationErrors | null {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    form.get('confirmPassword')?.setErrors(null);
    return null;
  }
}
