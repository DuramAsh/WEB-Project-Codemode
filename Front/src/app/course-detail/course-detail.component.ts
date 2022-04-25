import { Component, OnInit, Input } from '@angular/core';
import {Course} from '../models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UniServiceService } from '../uni-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course! : Course;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private location: Location, private service: UniServiceService) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    this.route.paramMap.subscribe(params => {
      const id = params.get('title') || '0';
      this.loaded = false;
      this.service.getCourses().subscribe(courses =>{
        this.course = courses.find(c => c.title === id) ?? courses[0];
      }
      );
      this.loaded = true;
    });
  }

}
