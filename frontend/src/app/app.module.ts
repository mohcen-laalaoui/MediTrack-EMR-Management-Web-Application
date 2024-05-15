import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app-routing.module'; 
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardPatientComponent } from './components/dashboard-patient/dashboard-patient.component';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';
import { RelaibleDoctorsComponent } from './components/relaible-doctors/relaible-doctors.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, DashboardPatientComponent, SettingsComponent, ActivityComponent, RelaibleDoctorsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
