import { Injectable } from '@angular/core';
import { Istudent } from '../model/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentArray: Array<Istudent> = [
    {
      fname: 'Jhon',
      lname: 'Doe',
      email: 'jhondoe@gmail.com',
      contact: 9998887770,
      id: '#7898'
    },
    {
      fname: 'Jhenni',
      lname: 'Doe',
      email: 'jhennidoe@gmail.com',
      contact: 7778889990,
      id: '#7696'
    }
  ]

  constructor(
    private _snackbarService: SnackbarService
  ) { }


  getAllStudent(): Array<Istudent> {
    return this.studentArray
  }

  addStudent(student: Istudent): void {
    this.studentArray.push(student)
    this._snackbarService.snackbarOpen(`${student.fname} is Added Successfully`)
  }

  removeStudent(std: Istudent) {

    let delId = this.studentArray.findIndex(e => e.id === std.id);
    this.studentArray.splice(delId, 1)

    this._snackbarService.snackbarOpen(`Student ${std.fname} is removed`)
  }
}
