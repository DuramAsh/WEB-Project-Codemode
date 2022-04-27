import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Course, Tutor } from '../models';
import { UniServiceService } from '../uni-service.service';

@Component({
  selector: 'app-tutor-courses',
  templateUrl: './tutor-courses.component.html',
  styleUrls: ['./tutor-courses.component.scss']
})
export class TutorCoursesComponent implements OnInit {

  loaded : boolean = false;
  declare courses : Course[];
  declare tutor : Tutor;
  constructor(private service: UniServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    timer(this.service.pageLoad).subscribe(x => this.getTutorCourse());
  }

  getTutorCourse(){
    
    this.route.paramMap.subscribe(params => {
      this.loaded = false;
      const id = params.get('name') || '0';
      this.service.getTutor(id).subscribe(data => { 
        this.tutor = data;
      })
      this.service.getTutorCourse(id).subscribe(data => {
        this.courses = data;
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
