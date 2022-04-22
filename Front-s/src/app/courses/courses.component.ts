import { Component, OnInit } from '@angular/core';
import {Course, courses} from '../models';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {


  courses!: Course[];
  loaded!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.loaded = false;
    this.courses = courses;
    this.loaded = true;
  }

}
