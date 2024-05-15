import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  patients: any[] = [];
  totalAppointments: number = 2;
  upArrow: number = 2;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments() {
    axios
      .get<any[]>('http://localhost:3000/appointments')
      .then((response) => {
        this.patients = response.data;
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }

  confirmAppointment(index: number) {
    this.patients[index].status = 'confirmed';
    this.totalAppointments++;
    this.upArrow++;
  }

  deleteAppointment(index: number) {
    this.patients.splice(index, 1);
    this.totalAppointments--;
  }
}
