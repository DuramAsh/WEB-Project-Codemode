import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Course, Tutor } from '../models';
import { UniServiceService } from '../uni-service.service';

@Component({
  selector: 'app-course-tutors',
  templateUrl: './course-tutors.component.html',
  styleUrls: ['./course-tutors.component.scss']
})
export class CourseTutorsComponent implements OnInit {

  loaded : boolean = false;
  declare course : Course;
  declare tutors : Tutor[];
  constructor(private service: UniServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    timer(this.service.pageLoad).subscribe(x => this.getCourseTutors());
  }

  getCourseTutors(){
    
    this.route.paramMap.subscribe(params => {
      this.loaded = false;
      const id = params.get('title') || '0';
      this.service.getCourse(id).subscribe(data => { 
        this.course = data;
      })
      this.service.getCourseTutors(id).subscribe(data => {
        this.tutors = data;
        this.loaded = true;
      })
    });
    
  }

  get isLogged() : boolean {
    return this.service.logged;
  }

  toManager(){
    location.href='https://t.me/codemode';
  }

}
