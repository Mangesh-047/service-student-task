import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/shared/model/student';
import { StudentService } from 'src/app/shared/service/student.service';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {



  constructor(
    private _utilityService: UtilityService,
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
  }

  onStdFormSubmit(fn: HTMLInputElement, ln: HTMLInputElement, email: HTMLInputElement, contact: HTMLInputElement) {


    if ((fn.value && ln.value && email.value && contact.value).length > 0) {

      let student: Istudent = {
        fname: fn.value,
        lname: ln.value,
        email: email.value,
        contact: +contact.value,
        id: this._utilityService.uuid()
      }

      console.log(student);

      fn.value = '';
      ln.value = '';
      email.value = '';
      contact.value = '';

      this._studentService.addStudent(student)
    }
  }



}
