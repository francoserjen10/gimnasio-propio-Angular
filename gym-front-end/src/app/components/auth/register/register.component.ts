import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RegisterService } from '../../../services/register.service';
import { User } from '../../../models/user';
import { RouterLink } from '@angular/router';
import { CustomValidators } from '../../../validators/custom-validators.none';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export default class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }


  ngOnInit(): void {
    // this.registerService.getAllUserService().subscribe(users => console.log("users", users));
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    birthDate: [null, Validators.required],
    dni: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password1: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
    password2: ['', Validators.required],
    emergencyContact: ['', Validators.required],
    direction: ['', Validators.required]
  },
    {
      validators: CustomValidators.passwordMatchValidator('password1', 'password2')
    }
  );

  createUser() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {

      const user: User = {
        name: this.registerForm.value.name!,
        lastName: this.registerForm.value.lastName!,
        phoneNumber: this.registerForm.value.phoneNumber!,
        birthDate: this.registerForm.value.birthDate!,
        dni: this.registerForm.value.dni!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password1!,
        emergencyContact: this.registerForm.value.emergencyContact!,
        direction: this.registerForm.value.direction!
      }
      this.registerService.createUserService(user).subscribe({
        next: (createdUser) => {
          console.log("Usuario creado con exito", createdUser);
          alert("Usuario creado con exito!");
        },
        error: (error) => {
          console.error("Error al crear usuario", error);
          alert("Error al crear el usuario");
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
      alert("Formulario invalido, por favor ingrese los datos nuevamente");
    }
  }
}


