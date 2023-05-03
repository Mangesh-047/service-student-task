import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {


  studentArray: Array<Istudent> = [];

  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentArray = this._studentService.getAllStudent()
  }

}
