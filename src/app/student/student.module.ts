import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './student-dashboard/student-table/student-table.component';
import { StudentFormComponent } from './student-dashboard/student-form/student-form.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    StudentDashboardComponent
  ]
})
export class StudentModule { }
