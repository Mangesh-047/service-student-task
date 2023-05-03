import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/service/student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  @Input()
  stdInfo!: Array<Istudent>
  constructor(
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onDeleteStd(std: Istudent) {
    this._studentService.removeStudent(std)
  }
}
