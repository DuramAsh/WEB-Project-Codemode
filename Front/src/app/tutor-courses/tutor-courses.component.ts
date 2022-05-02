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
      const id = params.get('id') || '0';
      this.service.getTutor(+id).subscribe(data => { 
        this.tutor = data;
      })
      this.service.getTutorCourse(+id).subscribe(data => {
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

  buyCourse(course_id: number){
    this.route.paramMap.subscribe(params => {
      const tutor = params.get('id') || '0';
      const id = localStorage.getItem('user_id') || 1;

      this.service.getCourse(+course_id).subscribe(course => {
        this.service.getUser(+id).subscribe(user => {
          if(user.balance >= course.price){
            this.service.updateBalance(+id, (user.balance - course.price)).subscribe(data => {
              console.log(data);
            })
  
            this.service.getAllCoursesTutors().subscribe(courses =>{
              for(let each of courses){
                if(each.course == course_id && each.tutor == +tutor){
                  this.service.buyCourse(+id, each.id, true).subscribe(data => {
                    console.log(data);
                  });
                }
              }
            });
          }
          

        })
      })

      

      

    });
  }

}
