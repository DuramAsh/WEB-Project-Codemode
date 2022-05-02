import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from '../uni-service.service';
@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss']
})
export class LogRegComponent implements OnInit {


  nickname = '';
  password = '';  

  constructor(public service: UniServiceService, private router: Router) { 
  }

  get isLogged(): boolean {
    return this.service.logged;
  }


  ngOnInit(): void {
    const token = localStorage.getItem('access');
    if (token != null) {
      this.service.setTrue();
    }else{
      this.service.setFalse();
    }
  }


  login() {
    this.service.login(this.nickname, this.password).subscribe((data) => {
      console.log(data);
      localStorage.setItem('access', data.access);
      localStorage.setItem('user_id', String(data.id));

      this.service.setTrue();
      this.nickname = '';
      this.password = '';
      this.router.navigate(['/account']);
    });
  }

  logout(){
    this.service.setFalse();
    this.service.logout();
  }


}
