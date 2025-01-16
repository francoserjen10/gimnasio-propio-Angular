import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  constructor(private authService: AuthService, private router: Router) { }

  logOut() {
    this.authService.logOut();
    const token = Cookies.get('token');
    if (!token) {
      alert("Sesión cerrada correctamente");
      this.router.navigate(['/user']);
    } else {
      alert("No se pudo cerrar la sesión");
    }
  }
}
