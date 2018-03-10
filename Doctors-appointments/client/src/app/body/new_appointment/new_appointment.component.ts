import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../server/models/appointments';
import { AppointmentService } from '../../server/controllers/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new_appointment.component.html',
  styleUrls: ['./new_appointment.component.css']
})
export class CreateQuestionComponent implements OnInit {

  newAppointment: Appointment = new Appointment;

  constructor(
    private _router: Router,
    private _appointmentService: AppointmentService
  ) { }

  ngOnInit() {
  }

  createQuestion() {
    this._appointmentService.addAppointment(this.newAppointment).subscribe(
      (res) => {
        console.log(res.json());
        this._router.navigateByUrl('/dashboard');
      }
    );
  }
}
