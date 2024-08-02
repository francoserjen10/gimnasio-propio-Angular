import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export default class LogginComponent {

  constructor(private formBuilder: FormBuilder) { }

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
    } else {
      alert('Error al iniciar sesion!!!')
    }
  }
}
