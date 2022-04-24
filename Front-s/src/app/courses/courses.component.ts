import { Component, OnInit } from '@angular/core';
import {Course} from '../models';
import { UniServiceService } from '../uni-service.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  id!: number;
  courses!: Course[];
  loaded!: boolean;
  constructor(private service: UniServiceService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.service.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

}
