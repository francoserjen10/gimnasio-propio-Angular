import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-loggin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export default class LogginComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  logginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
  });

  logginUser() {
    if (this.logginForm.valid) {
      const user = {
        email: this.logginForm.value.email!,
        password: this.logginForm.value.password!
      }
      this.authService.loggin(user.email, user.password).subscribe({
        next: (loggedUser) => {
          if (loggedUser !== null) {
            this.getRolesOfToken();
          }
        },
        error: (error) => {
          console.error("El usuario no existe", error);
          alert("El usuario no existe o las credenciales son incorrectas.");
        }
      });
    } else {
      this.logginForm.markAllAsTouched();
      alert('Por favor ingrese un email y contraseña válidos');
    }
  }

  getRolesOfToken() {
    this.authService.getRolesOfToken().subscribe({
      next: (userRole) => {
        if (userRole !== null) {
          this.redirectUser(userRole!);
        }
      },
      error: (error) => {
        console.error('Error al obtener el rol del usuario:', error);
      }
    })
  }

  redirectUser(rolId: number) {
    if (rolId === 1) {
      this.logginForm.reset();
      alert("Inicio de sesion exitoso!");
      this.router.navigate(['/admin']);
    } else if (rolId === 2) {
      this.logginForm.reset();
      alert("Inicio de sesion exitoso!");
      this.router.navigate(['/client']);
    } else {
      alert("El usuario no tiene un rol asignado");
      // this.router.navigate(['/not-found']); // redireccionar a pagina de error
    }
  }
}
