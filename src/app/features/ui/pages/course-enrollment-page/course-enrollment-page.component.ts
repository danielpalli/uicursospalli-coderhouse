import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCursosComponent } from '../../components/card-cursos/card-cursos.component';

@Component({
  standalone: true,
  imports: [CommonModule, CardCursosComponent],
  templateUrl: './course-enrollment-page.component.html',
  styleUrl: './course-enrollment-page.component.css'
})
export default class CourseEnrollmentPageComponent {

}
