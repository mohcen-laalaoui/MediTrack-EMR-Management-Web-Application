import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  appointment: any = {
    name: '',
    age: '',
    phone: '',
    doctor: '',
    date: '',
  };

  dateError: boolean = false;

  constructor(private router: Router) { }
  
  validateDate() {
    const selectedDate = new Date(this.appointment.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    this.dateError = selectedDate < today;
  }
  
  onSubmit() {
    console.log('Appointment details:', this.appointment);
    axios
      .post('http://localhost:3000/appointment', this.appointment)
      .then((response) => {
        console.log('Response from backend:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting appointment:', error);
      });
  }
}
