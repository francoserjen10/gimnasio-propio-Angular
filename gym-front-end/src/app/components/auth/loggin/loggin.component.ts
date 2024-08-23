import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogginService } from '../../../services/loggin.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export default class LogginComponent {

  constructor(private formBuilder: FormBuilder, private logginService: LogginService) { }

  logginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
  });

  logginUser() {
    console.log(this.logginForm.value);
    if (this.logginForm.valid) {
      console.log("cmidancdkanl")
      const user = {
        email: this.logginForm.value.email!,
        password: this.logginForm.value.password!
      }
      this.logginService.loggin(user.email, user.password).subscribe({
        next: (loggedUser) => {
          console.log("Inicio de sesion exitoso!", loggedUser);
          this.logginForm.reset();
          alert("Inicio de sesion exitoso!");
        },
        error: (error) => {
          console.error("El usuario no existe", error);
          alert("El usuario no existe");
        }
      });
    } else {
      this.logginForm.markAllAsTouched();
      alert('Error al iniciar sesion!!!');
    }
  }
}
