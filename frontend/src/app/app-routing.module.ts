import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupPatientComponent } from './components/signup-patient/signup-patient.component';
import { ChooseComponent } from './components/choose/choose.component';
import { SignupDoctorComponent } from './components/signup-doctor/signup-doctor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppoitementScheduelingComponent } from './components/appoitement-schedueling/appoitement-schedueling.component';
import { ScheduelComponent } from './components/scheduel/scheduel.component';
import { DashboardPatientComponent } from './components/dashboard-patient/dashboard-patient.component';
import { BookingComponent } from './components/booking/booking.component';
import { PatinetsComponent } from './components/patinets/patinets.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActivityComponent } from './components/activity/activity.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupPatientComponent },
  { path: 'choose', component: ChooseComponent },
  { path: 'signup-doctor', component: SignupDoctorComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'appoitementschedueling',
    component: AppoitementScheduelingComponent,
  },
  { path: 'scheduel', component: ScheduelComponent },
  { path: 'dashboard-patient', component: DashboardPatientComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'patinets', component: PatinetsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'activity', component: ActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
