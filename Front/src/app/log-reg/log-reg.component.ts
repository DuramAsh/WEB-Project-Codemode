import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UniServiceService } from '../uni-service.service';
@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.scss']
})
export class LogRegComponent implements OnInit {


  username = '';
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
    this.service.login(this.username, this.password).subscribe((data) => {
      console.log(data);
      localStorage.setItem('access', data.access);

      this.service.setTrue();
      this.username = '';
      this.password = '';
      this.router.navigate(['/courses']);
    });
  }

  logout(){
    this.service.setFalse();
    this.service.logout();
  }


}
