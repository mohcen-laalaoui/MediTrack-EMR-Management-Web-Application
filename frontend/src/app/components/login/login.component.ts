import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };
  loginError: string = '';
  constructor(private router: Router) {}
  onLogin() {
    if (!this.loginObj.email || !this.loginObj.password) {
      alert('Please fill in both email and password');
    }

    axios
      .post('http://localhost:3000/login', {
        email: this.loginObj.email,
        password: this.loginObj.password,
      })
      .then((response) => {
        console.log('Login successful!', response.data);
        this.router.navigate(['/dashboard-patient']);
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        this.loginError = 'Invalid username or password';
      });
  }
}
