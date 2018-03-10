import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../server/controllers/user.service';
import { Http } from '@angular/http';
import { User } from '../../server/models/user';

import { AppointmentService } from '../../server/controllers/appointment.service';
import { Appointment } from '../../server/models/appointments';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  user: R;
  appointments: Appointment[];

  constructor(
    private _http: Http,
    private _router: Router,
    private _us: UserService,
    private _appointmentService: AppointmentService


  ) {
  }

  ngOnInit() {
    this._us.checkstatus()
      .then(user => this.user = user)
      .catch(err => this._router.navigateByUrl('/login'));

    this._appointmentService.getAppointments()
      .then(appointments => {
        this.appointments = appointments;
        for (const appointment of this.appointments) {
          const newtime = new Date('May 3, 1993 00:00:00');
          newtime.setMinutes(appointment.time);
          appointment.time = newtime;
        }
      })
      .catch(err => console.log(err));
  }
  logout() {
    this._us.logout()
      .then(response => this._router.navigateByUrl('/login'));
  }
  refresh(eventData) {
    this._appointmentService.getAppointments()
      .then(appointments => {
        this.appointments = appointments;
        for (const appointment of this.appointments) {
          const newtime = new Date('May 3, 1993 00:00:00');
          newtime.setMinutes(appointment.time);
          appointment.time = newtime;
        }
      })
      .catch(err => console.log(err));
  }
}







