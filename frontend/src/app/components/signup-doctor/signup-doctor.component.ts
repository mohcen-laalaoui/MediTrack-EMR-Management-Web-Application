import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-signup-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-doctor.component.html',
  styleUrl: './signup-doctor.component.css',
})
export class SignupDoctorComponent {
  signupObj: any = {
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    confirm_password: '',
    Gender: 'male',
    medical_education: '',
    years_of_experience: '',
    medical_specialization: '',
    appoitement: '',
    practice_located: '',
    fullname: '',
    relationship: '',
    phonenumber: '',
  };

  constructor(private router: Router) {}

  passwordsMatch(): boolean {
    const password = this.signupObj.password;
    const confirmPassword = this.signupObj.confirm_password;

    if (password !== confirmPassword) {
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#$-%^&*])[a-zA-Z0-9!@_#$-%^&*]{8,}$/;
    return passwordRegex.test(password);
  }

  onSubmit() {
    if (this.passwordsMatch()) {
      this.router.navigateByUrl('/dashboard');
    } else {
      alert("Password don't match my friend !!!");
    }
    axios
      .post('http://localhost:3000/signup-doctor', this.signupObj)
      .then((response) => {
        console.log('Form data sent successfully!', response.data);
      })
      .catch((error) => {
        console.error('Error occurred while sending form data:', error.message);
      });
  }
}
