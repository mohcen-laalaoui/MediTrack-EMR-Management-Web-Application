import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-signup-patient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-patient.component.html',
  styleUrls: ['./signup-patient.component.css'],
})
export class SignupPatientComponent {
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
    blood: 'A+',
    insurance_provider: '',
    medical_history: '',
    allergies: '',
    currentMedications: '',
    surgeries: '',
    diseases: 'no',
    fullname: '',
    relationship: '',
    phonenumber: '',
  };
  showPassword: boolean = false;
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
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.passwordsMatch()) {
      this.router.navigateByUrl('/dashboard-patient');
    } else {
      alert("Password don't match my friend !!!");
    }

    axios
      .post('http://localhost:3000/signup-patient', this.signupObj)
      .then((response) => {
        console.log('Form data sent successfully!', response.data);
      })
      .catch((error) => {
        console.error('Error occurred while sending form data:', error.message);
      });
  }
}
