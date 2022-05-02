import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from '../uni-service.service';
import { timer } from 'rxjs';
import { User, StCourse, Course } from '../models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  imageColor = "4825c0";
  loaded = false;
  have = false;
  phone = "+7()";
  declare courses : StCourse[];
  output : string[] = [];
  declare user : User;

  

  constructor(private service: UniServiceService, private router: Router) { }

  ngOnInit(): void {
    if(!this.isLogged){
      this.router.navigate(['/authorize']);
    }
    
    timer(this.service.pageLoad).subscribe(x => {this.loaded = true; this.getUser(); this.getCourses()})
    
  }

  get isLogged() : boolean {
    return this.service.logged;
  }

  toManager(){
    location.href='https://t.me/codemode';
  }

  getUser(){
    this.loaded = false;
    const id = localStorage.getItem('user_id') || 1;
    this.service.getUser(+(id)).subscribe(user =>{
      this.user = user;
      this.loaded = true;
      if(user.phone != ""){
        this.have = true;
      }else{
        this.have = false;
      }
    })
  }

  setPhone(){
    this.loaded = false;
    const id = localStorage.getItem('user_id') || 1;
    console.log(this.user.phone);
    this.service.setPhone(+id, this.user.phone).subscribe(user =>{
      
      this.loaded = true;
    })
  }


  getCourses(){
    const id = localStorage.getItem('user_id') || 1;
    this.service.getUsersCourses(+id).subscribe(courses => {
      for(let i of courses){
        this.service.getCourse(i.course).subscribe(each => {
          this.output.push(each.url);
        })
      }
    })
    console.log(this.output);
  }

}
