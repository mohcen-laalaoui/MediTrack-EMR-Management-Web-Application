import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './patinets.component.html',
  styleUrls: ['./patinets.component.css'],
})
export class PatinetsComponent {
  patients: any[] = [];
  newPatient: any = {};

  showForm: boolean = false;
  constructor() {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addPatient() {
    const newPatient = {
      name: this.newPatient.name,
      phone: this.newPatient.phone,
      medicalHistory: this.newPatient.medicalHistory,
      gender: this.newPatient.gender,
      bloodType: this.newPatient.bloodType,
      prescriptions: this.newPatient.prescriptions,
      chronicDiseases: this.newPatient.chronicDiseases,
      medications: this.newPatient.medications,
    };

    this.patients.push({
      name: this.newPatient.name,
      phone: this.newPatient.phone,
      medicalHistory: this.newPatient.medicalHistory,
      gender: this.newPatient.gender,
      bloodType: this.newPatient.bloodType,
      prescriptions: this.newPatient.prescriptions,
      chronicDiseases: this.newPatient.chronicDiseases,
      medications: this.newPatient.medications,
    });

    // this.newPatient = {
    //   name: '',
    //   phone: '',
    //   medicalHistory: '',
    //   gender: '',
    //   bloodType: '',
    //   prescriptions: '',
    //   chronicDiseases: '',
    //   medications: '',
    // };
  }
}
